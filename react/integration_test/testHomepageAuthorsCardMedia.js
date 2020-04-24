/**
 * Test that Authors Card Media directs to right page on click.
 */

const assert = require('assert')

describe('Booklopedia Homepage Authors Card Media', () => {
	it('should link to Authors page on click', () => {
		browser.url('http://localhost:3000')
		const authorModelCard = browser.react$('CardMedia', {props: {title: 'Authors'}})
		authorModelCard.click()
		const authorsLink = browser.getUrl()
		assert.equal(authorsLink, 'http://localhost:3000/results?type=author&query=')
	})
})