const assert = require('assert')

/*
TEST 1 - NavBar Book Filter
Description:
Check to see if clicking the Navigation Bar's Book Filter without any input leads to 
the generic Book Search Result Page.
*/
describe('Booklopedia Navigation Bar [BOOK]', () => {
    it('should be the generic book model page', () => {
        browser.url('http://www.booklopedia.appspot.com/')
        const bookButton = $('#books')
        bookButton.click()
        assert.strictEqual(console.log(browser.getUrl()), 'http://booklopedia.appspot.com/results?type=book&query=')
    })
})

/*
TEST 2 - NavBar Book Filter w/ Normal Input
Description:
Check to see if clicking the Navigation Bar's Book Filter with a normal user input leads to 
the corresponding Book Search Result Page.
*/
describe('Booklopedia Navigation Bar [BOOK] - Valid User Input', () => {
    it('should be the corresponding book results page', () => {
        browser.url('http://www.booklopedia.appspot.com/')
        const searchField = $('#search-bar')
        searchField.setValue('Potter')
        const bookButton = $('#books')
        bookButton.click()
        const firstSearchResult = $('0')
        assert.strictEqual(firstSearchResult.getValue(), 'The End of Harry Potter?')
    })
})

/*
TEST 3 - NavBar Book Filter w/ Special Character Input
Description:
Check to see if clicking the Navigation Bar's Book Filter with a special character user input leads to 
the corresponding Book Search Result Page.
*/
describe('Booklopedia Navigation Bar [BOOK] - Special Character User Input', () => {
    it('should be the corresponding book results page', () => {
        browser.url('http://www.booklopedia.appspot.com/')
        const searchField = $('#search-bar')
        searchField.setValue('@#*')
        const bookButton = $('#books')
        bookButton.click()
        const firstSearchResult = $('0')
        assert.strictEqual(firstSearchResult.getValue(), 'The Spartan W@rker')
    })
})

/*
TEST 4 - NavBar Book Filter w/ Numbers Input
Description:
Check to see if clicking the Navigation Bar's Book Filter with numbers user input leads to 
the corresponding Book Search Result Page.
*/
describe('Booklopedia Navigation Bar [BOOK] - Numbers User Input', () => {
    it('should be an empty page', () => {
        browser.url('http://www.booklopedia.appspot.com/')
        const searchField = $('#search-bar')
        searchField.setValue('1234')
        const bookButton = $('#books')
        bookButton.click()
        const firstSearchResult = $('0')
        assert.strictEqual(firstSearchResult.getValue(), '')
    })
})