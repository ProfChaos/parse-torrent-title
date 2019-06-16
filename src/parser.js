function extendOptions(options) {
	options = options || {}

	const defaultOptions = {
		skipIfAlreadyFound: true,
		type: 'string'
	}

	options.skipIfAlreadyFound = options.skipIfAlreadyFound || defaultOptions.skipIfAlreadyFound
	options.type = options.type || defaultOptions.type

	return options
}

function createHandlerFromRegExp(name, regExp, options) {
	let transformer

	if (!options.type) {
		transformer = input => input
	} else if (options.type.toLowerCase() === 'lowercase') {
		transformer = input => input.toLowerCase()
	} else if (options.type.toLowerCase().substr(0, 4) === 'bool') {
		transformer = () => true
	} else if (options.type.toLowerCase().substr(0, 3) === 'int') {
		transformer = input => parseInt(input, 10)
	} else {
		transformer = input => input
	}

	function handler({ title, result, taken }) {
		if (result[name] && options.skipIfAlreadyFound) {
			return null
		}

		const match = title.match(regExp)
		const [rawMatch, cleanMatch] = match || []

		if (rawMatch) {
			const value = options.value || transformer(cleanMatch || rawMatch)

			const valueEnd = match.index + value.length - 1
			let crashedWithOtherMatch = false
			taken.forEach(({ start, end }) => {
				if ((match.index >= start && match.index < end) || (valueEnd >= start && valueEnd < end)) {
					crashedWithOtherMatch = true
				}
			})

			if (crashedWithOtherMatch) {
				return null
			}

			result[name] = value

			taken.push({
				start: match.index,
				end: match.index + value.length
			})

			return {
				matchIndex: match.index,
				length: value.length
			}
		}

		return null
	}

	handler.handlerName = name

	return handler
}

function cleanTitle(rawTitle) {
	let cleanedTitle = rawTitle

	if (cleanedTitle.indexOf(' ') === -1 && cleanedTitle.indexOf('.') !== -1) {
		cleanedTitle = cleanedTitle.replace(/\./g, ' ')
	}

	cleanedTitle = cleanedTitle.replace(/_/g, ' ')
	cleanedTitle = cleanedTitle.replace(/([(_]|- )$/, '').trim()

	return cleanedTitle
}

class Parser {
	constructor() {
		this.handlers = []
	}

	addHandler(handlerName, handler, options) {
		if (typeof handler === 'undefined' && typeof handlerName === 'function') {
			// If no name is provided and a function handler is directly given
			handler = handlerName
			handler.handlerName = 'unknown'
		} else if (typeof handlerName === 'string' && handler instanceof RegExp) {
			// If the handler provided is a regular expression
			options = extendOptions(options)
			handler = createHandlerFromRegExp(handlerName, handler, options)
		} else if (typeof handler === 'function') {
			// If the handler is a function
			handler.handlerName = handlerName
		} else {
			// If the handler is neither a function nor a regular expression, throw an error
			throw new Error(
				`Handler for ${handlerName} should be a RegExp or a function. Got: ${typeof handler}`
			)
		}

		this.handlers.push(handler)
	}

	parse(title) {
		const result = {}
		const taken = []
		let endOfTitle = title.length
		let startOfTitle = 0

		for (const handler of this.handlers) {
			const match = handler({ title, result, taken })
			if (match) {
				const { matchIndex, length } = match

				// Some movies have the group at the start of the torrent name
				if (matchIndex === 0) {
					startOfTitle = length + 1
				} else if (matchIndex && matchIndex < endOfTitle) {
					endOfTitle = matchIndex
				}
			}
		}

		result.title = cleanTitle(title.substr(startOfTitle, endOfTitle - startOfTitle))

		return result
	}
}

exports.Parser = Parser
