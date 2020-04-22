const assert = require('assert')

describe('Booklopedia front page', () => {
    it('should have the right title', () => {
        browser.url('http://www.booklopedia.appspot.com/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Booklopedia')
    })
})