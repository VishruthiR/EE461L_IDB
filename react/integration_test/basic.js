/**
 * Test that WebdriverIO is installed and runs correctly with this trivial test.
 */

const assert = require('assert')

describe('Booklopedia front page', () => {
    it('should have the right title', () => {
        browser.url('http://localhost:3000')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Booklopedia')
    })
})