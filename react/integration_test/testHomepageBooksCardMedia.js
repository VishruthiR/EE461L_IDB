/**
 * Test that Books Card Media directs to right page on click.
 */

const assert = require('assert')


describe('Booklopedia Homepage Books Card Media', () => {
    it('should link to Books page on click', () => {
		browser.url('http://localhost:3000')
		const bookModelCard = browser.react$('CardMedia', {props: {title: 'Books'}})
		bookModelCard.click()
		const booksLink = browser.getUrl()
		assert.equal(booksLink, 'http://localhost:3000/results?type=book&query=')
	})
})