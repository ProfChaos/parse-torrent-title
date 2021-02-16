const { expect } = require('chai')
const parse = require('../index').parse

describe('Random releases', () => {
	it('sons.of.anarchy.s05e10.480p.BluRay.x264-GAnGSteR', () => {
		const releaseName = 'sons.of.anarchy.s05e10.480p.BluRay.x264-GAnGSteR'
		expect(parse(releaseName)).to.deep.equal({
			title: 'sons of anarchy',
			resolution: '480p',
			season: 5,
			episode: 10,
			source: 'bluray',
			codec: 'x264',
			group: 'GAnGSteR',
			type: 'tv'
		})
	})

	it('Color.Of.Night.Unrated.DC.VostFR.BRrip.x264', () => {
		const releaseName = 'Color.Of.Night.Unrated.DC.VostFR.BRrip.x264'
		expect(parse(releaseName)).to.deep.equal({
			title: 'Color Of Night',
			unrated: true,
			language: 'vostfr',
			source: 'brrip',
			codec: 'x264',
			type: 'movie'
		})
	})

	it('Da Vinci Code DVDRip', () => {
		const releaseName = 'Da Vinci Code DVDRip'
		expect(parse(releaseName)).to.deep.equal({
			title: 'Da Vinci Code',
			source: 'dvdrip',
			type: 'movie'
		})
	})

	it('Some.girls.1998.DVDRip', () => {
		const releaseName = 'Some.girls.1998.DVDRip'
		expect(parse(releaseName)).to.deep.equal({
			title: 'Some girls',
			source: 'dvdrip',
			year: 1998,
			type: 'movie'
		})
	})

	it('Ecrit.Dans.Le.Ciel.1954.MULTI.DVDRIP.x264.AC3-gismo65', () => {
		const releaseName = 'Ecrit.Dans.Le.Ciel.1954.MULTI.DVDRIP.x264.AC3-gismo65'
		expect(parse(releaseName)).to.deep.equal({
			title: 'Ecrit Dans Le Ciel',
			source: 'dvdrip',
			year: 1954,
			language: 'multi',
			codec: 'x264',
			audio: 'ac3',
			group: 'gismo65',
			type: 'movie'
		})
	})

	it('2019 After The Fall Of New York 1983 REMASTERED BDRip x264-GHOULS', () => {
		const releaseName = '2019 After The Fall Of New York 1983 REMASTERED BDRip x264-GHOULS'
		expect(parse(releaseName)).to.deep.equal({
			title: '2019 After The Fall Of New York',
			source: 'bdrip',
			remastered: true,
			year: 1983,
			codec: 'x264',
			group: 'GHOULS',
			type: 'movie'
		})
	})

	it('Ghost In The Shell 2017 720p HC HDRip X264 AC3-EVO', () => {
		const releaseName = 'Ghost In The Shell 2017 720p HC HDRip X264 AC3-EVO'
		expect(parse(releaseName)).to.deep.equal({
			title: 'Ghost In The Shell',
			source: 'hdrip',
			hardcoded: true,
			year: 2017,
			resolution: '720p',
			codec: 'x264',
			audio: 'ac3',
			group: 'EVO',
			type: 'movie'
		})
	})

	it('Rogue One 2016 1080p BluRay x264-SPARKS', () => {
		const releaseName = 'Rogue One 2016 1080p BluRay x264-SPARKS'
		expect(parse(releaseName)).to.deep.equal({
			title: 'Rogue One',
			source: 'bluray',
			year: 2016,
			resolution: '1080p',
			codec: 'x264',
			group: 'SPARKS',
			type: 'movie'
		})
	})

	it('Desperation 2006 Multi Pal DvdR9-TBW1973', () => {
		const releaseName = 'Desperation 2006 Multi Pal DvdR9-TBW1973'
		expect(parse(releaseName)).to.deep.equal({
			title: 'Desperation',
			source: 'dvd',
			year: 2006,
			language: 'multi',
			region: 'R9',
			group: 'TBW1973',
			type: 'movie'
		})
	})

	it("Maman, j'ai raté l'avion 1990 VFI 1080p BluRay DTS x265-HTG", () => {
		const releaseName = "Maman, j'ai raté l'avion 1990 VFI 1080p BluRay DTS x265-HTG"
		expect(parse(releaseName)).to.deep.equal({
			title: "Maman, j'ai raté l'avion",
			source: 'bluray',
			year: 1990,
			audio: 'dts',
			resolution: '1080p',
			language: 'vfi',
			codec: 'x265',
			group: 'HTG',
			type: 'movie'
		})
	})

	it('[BlurayDesuYo] Shingeki no Kyojin (Season 3) 38 (BD 1920x1080 10bit FLAC) [619BE7E0].mkv', () => {
		const releaseName =
			'[BlurayDesuYo] Shingeki no Kyojin (Season 3) 38 (BD 1920x1080 10bit FLAC) [619BE7E0].mkv'
		expect(parse(releaseName)).to.deep.equal({
			title: 'Shingeki no Kyojin',
			audio: 'flac',
			resolution: '1080',
			container: 'mkv',
			group: 'BlurayDesuYo',
			season: 3,
			episode: 38,
			color_depth: '10-bit',
			type: 'tv'
		})
	})

	it('[Ohys-Raws] JoJo no Kimyou na Bouken Ougon no Kaze - 33 (BS11 1280x720 x264 AAC).mp4', () => {
		const releaseName =
			'[Ohys-Raws] JoJo no Kimyou na Bouken Ougon no Kaze - 33 (BS11 1280x720 x264 AAC).mp4'
		expect(parse(releaseName)).to.deep.equal({
			audio: 'aac',
			codec: 'x264',
			container: 'mp4',
			episode: 33,
			producer: 'BS',
			group: 'Ohys-Raws',
			resolution: '720',
			title: 'JoJo no Kimyou na Bouken Ougon no Kaze',
			type: 'tv'
		})
	})

	it('[HorribleSubs] Boruto - Naruto Next Generations - 111 [720p].mkv', () => {
		const releaseName = '[HorribleSubs] Boruto - Naruto Next Generations - 111 [720p].mkv'
		expect(parse(releaseName)).to.deep.equal({
			container: 'mkv',
			episode: 111,
			group: 'HorribleSubs',
			resolution: '720p',
			title: 'Boruto - Naruto Next Generations',
			type: 'tv'
		})
	})

	it('Marvels.Agents.of.S.H.I.E.L.D.S06E05.720p.HDTV.x264-AVS.mkv', () => {
		const releaseName = 'Marvels.Agents.of.S.H.I.E.L.D.S06E05.720p.HDTV.x264-AVS.mkv'
		expect(parse(releaseName)).to.deep.equal({
			codec: 'x264',
			container: 'mkv',
			episode: 5,
			group: 'AVS',
			resolution: '720p',
			season: 6,
			source: 'hdtv',
			title: 'Marvels Agents of S H I E L D',
			type: 'tv'
		})
	})

	it('stephen.colbert.2019.02.03.conan.obrien.web.x264-cookiemonster.mkv', () => {
		const releaseName = 'stephen.colbert.2019.02.03.conan.obrien.web.x264-cookiemonster.mkv'
		expect(parse(releaseName)).to.deep.equal({
			codec: 'x264',
			container: 'mkv',
			group: 'cookiemonster',
			title: 'stephen colbert',
			date: '2019-02-03',
			type: 'tv'
		})
	})

	it('Star.Wars.Episode.IX.The.Rise.of.Skywalker.2019.2160p.WEB-DL.DDP5.1.Atmos.HEVC-BLUTONiUM.mkv', () => {
		const releaseName =
			'Star.Wars.Episode.IX.The.Rise.of.Skywalker.2019.2160p.WEB-DL.DDP5.1.Atmos.HEVC-BLUTONiUM.mkv'
		expect(parse(releaseName)).to.deep.equal({
			audio: 'atmos',
			codec: 'hevc',
			year: 2019,
			container: 'mkv',
			group: 'BLUTONiUM',
			title: 'Star Wars Episode IX The Rise of Skywalker',
			resolution: '4k',
			source: 'web-dl',
			type: 'movie'
		})
	})

	it('Star.Wars.Episode.7.The.Force.Awakens.2015.1080p.BluRay.DTS.x264.D-Z0N3', () => {
		const releaseName = 'Star.Wars.Episode.7.The.Force.Awakens.2015.1080p.BluRay.DTS.x264.D-Z0N3'
		expect(parse(releaseName)).to.deep.equal({
			audio: 'dts',
			group: 'D-Z0N3',
			resolution: '1080p',
			source: 'bluray',
			codec: 'x264',
			title: 'Star Wars Episode 7 The Force Awakens',
			type: 'movie',
			year: 2015
		})
	})

	it('Last.Week.Tonight.with.John.Oliver.S08E01.February.14.2021.720p.HMAX.WEB-DL.DD2.0.H.264-null.mkv', () => {
		const releaseName =
			'Last.Week.Tonight.with.John.Oliver.S08E01.February.14.2021.720p.HMAX.WEB-DL.DD2.0.H.264-null.mkv'
		expect(parse(releaseName)).to.deep.equal({
			codec: 'h264',
			container: 'mkv',
			group: 'null',
			resolution: '720p',
			episode: 1,
			season: 8,
			source: 'web-dl',
			title: 'Last Week Tonight with John Oliver',
			type: 'tv',
			year: 2021
		})
	})
})
