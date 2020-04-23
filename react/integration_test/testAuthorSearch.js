const assert = require('assert')

/*
TEST 1 - NavBar Author Filter
Description:
Check to see if clicking the Navigation Bar's Author Filter without any input leads to 
the generic Author Search Result Page.
*/
describe('Booklopedia Navigation Bar [AUTHOR]', () => {
    it('should be the generic Author model page', () => {
        browser.url('http://localhost:3000')
        const authorButton = browser.react$('ListItem', {props: {id: 'authors'}})
        authorButton.click()
        const newUrl = browser.getUrl()
        assert.strictEqual(newUrl, 'http://localhost:3000/results?type=author&query=')
    })
})

/*
TEST 2 - NavBar Author Filter w/ Normal Input
Description:
Check to see if clicking the Navigation Bar's Author Filter with a normal user input leads to 
the corresponding Author Search Result Page.
*/
describe('Booklopedia Navigation Bar [AUTHOR] - Valid User Input', () => {
    it('should be the corresponding Author results page', () => {
        browser.url('http://localhost:3000')
        const searchField = $('#search-bar')
        searchField.setValue('Rowling')
        const authorButton = $('#authors')
        authorButton.click()
        const firstSearchResult = browser.react$('Result').isExisting()
        assert.strictEqual(firstSearchResult, true)
    })
})

/*
TEST 3 - NavBar Author Filter w/ Special Character Input
Description:
Check to see if clicking the Navigation Bar's Author Filter with a special character user input leads to 
no results returned on the Author Search Result Page.
*/
describe('Booklopedia Navigation Bar [AUTHOR] - Special Character User Input', () => {
    it('should be the corresponding Author results page', () => {
        browser.url('http://localhost:3000')
        const searchField = $('#search-bar')
        searchField.setValue('@#*')
        const bookButton = $('#authors')
        bookButton.click()
        const firstSearchResult = browser.react$('Result').isExisting()
        assert.strictEqual(firstSearchResult, false)
    })
})

/*
TEST 4 - NavBar Author Filter w/ Numbers Input
Description:
Check to see if clicking the Navigation Bar's Book Filter with numbers user input leads to 
no results returned on the corresponding Author Search Result Page.
*/
describe('Booklopedia Navigation Bar [AUTHOR] - Numbers User Input', () => {
    it('should be an empty page', () => {
        browser.url('http://localhost:3000')
        const searchField = $('#search-bar')
        searchField.setValue('1234')
        const authorsButton = $('#authors')
        authorsButton.click()
        const firstSearchResult = browser.react$('Result').isExisting()
        assert.strictEqual(firstSearchResult, false)
    })
})