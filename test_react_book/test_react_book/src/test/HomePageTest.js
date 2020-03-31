const {Builder, By, until} = require('selenium-webdriver');

(async function example() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000');  //replace with whatever port development build is running on
        var homepageButtons = await driver.findElement(By.tagName('a'));
        console.log(homepageButtons.getAttribute('href'));
	    console.log(homepageButtons);
    } finally {
        await driver.quit();
    }
})();