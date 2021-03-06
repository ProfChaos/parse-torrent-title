const { expect } = require('chai')
const parse = require('../index').parse

describe('Parsing episode', () => {
	it('should detect regular episode correctly', () => {
		const releaseName = 'The Simpsons S28E21 720p HDTV x264-AVS'
		expect(parse(releaseName)).to.deep.include({ episode: 21 })
	})

	it('should detect regular episode with lowercase correctly', () => {
		const releaseName = 'breaking.bad.s01e01.720p.bluray.x264-reward'
		expect(parse(releaseName)).to.deep.include({ episode: 1 })
	})

	it('should detect regular episode with a space between', () => {
		const releaseName = 'Dragon Ball Super S01 E23 French 1080p HDTV H264-Kesni'
		expect(parse(releaseName)).to.deep.include({ episode: 23 })
	})

	it('should detect episode with SxEE format correctly', () => {
		const releaseName = 'Doctor.Who.2005.8x11.Dark.Water.720p.HDTV.x264-FoV'
		expect(parse(releaseName)).to.deep.include({ episode: 11 })
	})

	it('should detect episode when written as such', () => {
		const releaseName = ' Anubis saison 01 episode 38 tvrip FR'
		expect(parse(releaseName)).to.deep.include({ episode: 38 })
	})

	it('should detect episode when written as such shortened', () => {
		const releaseName = " Le Monde Incroyable de Gumball - Saison 5 Ep 14 - L'extérieur"
		expect(parse(releaseName)).to.deep.include({ episode: 14 })
	})
	it('should detect anime episode when written as such', () => {
		const releaseName =
			'[BlurayDesuYo] Shingeki no Kyojin (Season 3) 38 (BD 1920x1080 10bit FLAC) [619BE7E0].mkv'
		expect(parse(releaseName)).to.deep.include({ episode: 38 })
	})
})
