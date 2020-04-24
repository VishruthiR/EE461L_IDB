/**
 * Test that Genres Card Media directs to right page on click.
 */

const assert = require('assert')

describe('Booklopedia Homepage Genres Card Media', () => {
	it('should link to Genres page on click', () => {
		browser.url('http://localhost:3000')
		const genreModelCard = browser.react$('CardMedia', {props: {title: 'Genres'}})
		genreModelCard.click()
		const genresLink = browser.getUrl()
		assert.equal(genresLink, 'http://localhost:3000/results?type=genre&query=')
	})
})