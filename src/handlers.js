exports.addDefaults = /** @type Parser */ parser => {
	// Color depth
	parser.addHandler('color_depth', /10-?bit/, { value: '10-bit' })
	parser.addHandler('color_depth', /8-?bit/, { value: '8-bit' })

	// Resolution before being parsed as year
	parser.addHandler('resolution', /[0-9]{3,4}x([0-9]{3,4})/i)

	parser.addHandler('date', /[0-9]{4}.[0-9]{2}.[0-9]{2}/i)
	parser.addHandler('date', ({ result }) => {
		if (result.date && result.date.value) {
			result.date.value = result.date.value.replace(/\./g, '-')
		}
	})

	// Year
	parser.addHandler('year', /(?!^)[([]?((?:19[0-9]|20[012])[0-9])[)\]]?/, {
		type: 'integer'
	})

	// Resolution
	parser.addHandler('resolution', /(4k|2160p)/i, { value: '4k' })
	parser.addHandler('resolution', /(8k|4320p)/i, { value: '8k' })
	parser.addHandler('resolution', /([0-9]{3,4}[pi])/i, { type: 'lowercase' })

	// Extended
	parser.addHandler('extended', /EXTENDED/i, { type: 'boolean' })

	// Convert
	parser.addHandler('convert', /CONVERT/i, { type: 'boolean' })

	// Hardcoded
	parser.addHandler('hardcoded', /HC|HARDCODED/i, { type: 'boolean' })

	// Proper
	parser.addHandler('proper', /(?:REAL.)?PROPER/i, { type: 'boolean' })

	// Repack
	parser.addHandler('repack', /REPACK|RERIP/i, { type: 'boolean' })

	// Retail
	parser.addHandler('retail', /\bRetail\b/i, { type: 'boolean' })

	// Remastered
	parser.addHandler('remastered', /\bRemaster(?:ed)?\b/i, { type: 'boolean' })

	// Unrated
	parser.addHandler('unrated', /\bunrated|uncensored\b/i, { type: 'boolean' })

	// Region
	parser.addHandler('region', /R[0-9]/)

	// Container
	parser.addHandler('container', /\b(MKV|AVI|MP4)\b/i, { type: 'lowercase' })

	// Source
	parser.addHandler('source', /\b(?:HD-?)?CAM\b/, { type: 'lowercase' })
	parser.addHandler('source', /\b(?:HD-?)?T(?:ELE)?S(?:YNC)?\b/i, {
		value: 'telesync'
	})
	parser.addHandler('source', /\bHD-?Rip\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\bBRRip\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\bBDRip\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\bDVDRip\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\bDVD(?:R[0-9])?\b/i, { value: 'dvd' })
	parser.addHandler('source', /\bDVDscr\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\b(?:HD-?)?TVRip\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\bTC\b/, { type: 'lowercase' })
	parser.addHandler('source', /\bPPVRip\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\bR5\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\bVHSSCR\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\bBluray\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\bWEB-?DL\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\bWEB-?Rip\b/i, { type: 'lowercase' })
	parser.addHandler('source', /\b(?:DL|WEB|BD|BR)MUX\b/i, {
		type: 'lowercase'
	})
	parser.addHandler('source', /HDTV/i, { type: 'lowercase' })

	// Codec
	parser.addHandler('codec', /dvix|mpeg2|divx|xvid|[xh][-. ]?26[45]|avc|hevc/i, {
		type: 'lowercase'
	})
	parser.addHandler('codec', ({ result }) => {
		if (result.codec && result.codec.value) {
			result.codec.value = result.codec.value.replace(/[ .-]/, '')
		}
	})

	// Audio
	parser.addHandler('audio', /MD|MP3|mp3|FLAC|Atmos|DTS(?:-HD)?|TrueHD/, {
		type: 'lowercase'
	})
	parser.addHandler('audio', /Dual[- ]Audio/i, { type: 'lowercase' })
	parser.addHandler('audio', /AC-?3(?:\.5\.1)?/i, { value: 'ac3' })
	parser.addHandler('audio', /DD5[. ]?1/i, { value: 'dd5.1' })
	parser.addHandler('audio', /AAC(?:[. ]?2[. ]0)?/, { value: 'aac' })

	// Group
	parser.addHandler('group', /D-Z0N3/i)
	parser.addHandler('group', /- ?([^\-. ]+)(\.\w+)?$/)
	parser.addHandler('group', /^(\w+)-/)
	parser.addHandler('group', /^(\[([^\]]+)\])/i)
	parser.addHandler('group', ({ result }) => {
		if (result.group && result.group.value) {
			result.group.value = result.group.value.replace(/(^\[|\]$)/g, '')
		}
	})

	parser.addHandler('producer', /BS11/, { value: 'BS' })

	// Season
	parser.addHandler('season', /S([0-9]{1,2}) ?E[0-9]{1,2}/i, {
		type: 'integer'
	})
	parser.addHandler('season', /S([0-9]{1,2})/i, { type: 'integer' })
	parser.addHandler('season', /(?:Saison|Season)[. _-]?([0-9]{1,2})/i, {
		type: 'integer'
	})
	parser.addHandler('season', /([0-9]{1,2})x[0-9]{1,2}/, { type: 'integer' })

	// Episode
	parser.addHandler('episode', /\(Season \d+\) ([0-9]{1,3})\s/i, {
		type: 'integer'
	})
	parser.addHandler('episode', /- ([0-9]{1,3}) (\[|\()/i, { type: 'integer' })
	parser.addHandler('episode', /S[0-9]{1,2} ?E([0-9]{1,2})/i, {
		type: 'integer'
	})
	parser.addHandler('episode', /[ée]p(?:isode)?[. _-]?([0-9]{1,3})/i, {
		type: 'integer'
	})
	parser.addHandler('episode', /[0-9]{1,2}x([0-9]{1,2})/, { type: 'integer' })

	// Language
	parser.addHandler('language', /\bRUS\b/i, { type: 'lowercase' })
	parser.addHandler('language', /\bNL\b/, { type: 'lowercase' })
	parser.addHandler('language', /\bFLEMISH\b/, { type: 'lowercase' })
	parser.addHandler('language', /\bGERMAN\b/, { type: 'lowercase' })
	parser.addHandler('language', /\bDUBBED\b/, { type: 'lowercase' })
	parser.addHandler('language', /\b(ITA(?:LIAN)?|iTALiAN)\b/, { value: 'ita' })
	parser.addHandler('language', /\bFR(?:ENCH)?\b/, { type: 'lowercase' })
	parser.addHandler('language', /\bTruefrench|VF(?:[FI])\b/i, {
		type: 'lowercase'
	})
	parser.addHandler('language', /\bVOST(?:(?:F(?:R)?)|A)?|SUBFRENCH\b/i, {
		type: 'lowercase'
	})
	parser.addHandler('language', /\bMULTi(?:Lang|-VF2)?\b/i, {
		type: 'lowercase'
	})
}
