// Function for scraping menu items from the page at http://www.aroy.co.nz/menu.html
// This function returns an object in the format defined by scraped_menus/README.md
const cheerio = require('cheerio')

function scrapeAroy (html) {
  const menu = {}

  $ = cheerio.load(html)
  $('#menuarea').each(function (index, element) {
    // do stuff
  })
  return menu
}

module.exports = scrapeAroy