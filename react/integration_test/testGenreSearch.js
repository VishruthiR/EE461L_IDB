const assert = require('assert')

/*
TEST 1 - NavBar Genre Filter
Description:
Check to see if clicking the Navigation Bar's Genre Filter without any input leads to 
the generic Genre Search Result Page.
*/
describe('Booklopedia Navigation Bar [GENRE]', () => {
    it('should be the generic Genre model page', () => {
        browser.url('http://localhost:3000')
        const genreButton = browser.react$('ListItem', {props: {id: 'genres'}})
        genreButton.click()
        const newUrl = browser.getUrl()
        assert.strictEqual(newUrl, 'http://localhost:3000/results?type=genre&query=')
    })
})

/*
TEST 2 - NavBar Genre Filter w/ Normal Input
Description:
Check to see if clicking the Navigation Bar's Genre Filter with a normal user input leads to 
the corresponding Genre Search Result Page.
*/
describe('Booklopedia Navigation Bar [GENRE] - Valid User Input', () => {
    it('should be the corresponding Genre results page', () => {
        browser.url('http://localhost:3000')
        const searchField = $('#search-bar')
        searchField.setValue('Fantasy')
        const genreButton = $('#genres')
        genreButton.click()
        const firstSearchResult = browser.react$('Result').isExisting()
        assert.strictEqual(firstSearchResult, true)
    })
})

/*
TEST 3 - NavBar Genre Filter w/ Special Character Input
Description:
Check to see if clicking the Navigation Bar's Genre Filter with a special character user input leads to 
no results returned on the Genre Search Result Page.
*/
describe('Booklopedia Navigation Bar [GENRE] - Special Character User Input', () => {
    it('should be the corresponding Genre results page', () => {
        browser.url('http://localhost:3000')
        const searchField = $('#search-bar')
        searchField.setValue('@#*')
        const genreButton = $('#genres')
        genreButton.click()
        const firstSearchResult = browser.react$('Result').isExisting()
        assert.strictEqual(firstSearchResult, false)
    })
})

/*
TEST 4 - NavBar Genre Filter w/ Numbers Input
Description:
Check to see if clicking the Navigation Bar's Book Filter with numbers user input leads to 
no results returned on the corresponding Genre Search Result Page.
*/
describe('Booklopedia Navigation Bar [GENRE] - Numbers User Input', () => {
    it('should be an empty page', () => {
        browser.url('http://localhost:3000')
        const searchField = $('#search-bar')
        searchField.setValue('1234')
        const genresButton = $('#genres')
        genresButton.click()
        const firstSearchResult = browser.react$('Result').isExisting()
        assert.strictEqual(firstSearchResult, false)
    })
})