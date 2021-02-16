const { expect } = require('chai')
const parse = require('../index').parse

describe('Parsing type', () => {
	it('should detect movie', () => {
		const releaseName = 'Nocturnal Animals 2016 VFF 1080p BluRay DTS HEVC-HD2'

		const parsed = parse(releaseName)

		expect(parsed).to.deep.include({ type: 'movie' })
	})

	it('Star.Wars.Episode.IX.The.Rise.of.Skywalker.2019.2160p.WEB-DL.DDP5.1.Atmos.HEVC-BLUTONiUM.mkv', () => {
		const releaseName =
			'Star.Wars.Episode.IX.The.Rise.of.Skywalker.2019.2160p.WEB-DL.DDP5.1.Atmos.HEVC-BLUTONiUM.mkv'

		expect(parse(releaseName)).to.deep.include({ type: 'movie' })
	})

	it('Star.Wars.Episode.7.The.Force.Awakens.2015.1080p.BluRay.DTS.x264.D-Z0N3', () => {
		const releaseName = 'Star.Wars.Episode.7.The.Force.Awakens.2015.1080p.BluRay.DTS.x264.D-Z0N3'

		expect(parse(releaseName)).to.deep.include({ type: 'movie' })
	})
})
