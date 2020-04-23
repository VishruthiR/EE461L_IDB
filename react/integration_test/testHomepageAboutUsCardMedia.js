/**
 * Test that About Us Card Media directs to right page on click.
 */

const assert = require('assert')

describe('Booklopedia Homepage About Us Card Media', () => {
	it('should link to About Us page on clicks', () => {
		browser.url('http://localhost:3000')
		const aboutUsModelCard = browser.react$('CardMedia', {props: {title: 'About Us'}})
		aboutUsModelCard.click()
		const aboutUsLink = browser.getUrl()
		assert.equal(aboutUsLink, 'http://localhost:3000/About')
    })
})