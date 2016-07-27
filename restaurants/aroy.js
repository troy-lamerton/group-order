"use strict";
// This function returns an object in the format defined by scraped_menus/README.md
const cheerio = require('cheerio')

function scrapeAroy (html) {
  const menu = {}

  const $ = cheerio.load(html)

  $('#menuarea').children().slice(1).each(function (index, category) {
    // create a menu group key
    const groupName = $(category).attr('id'))
    menu[groupName] = [];

    $(category).children().each(function (i, menuitem))

  })
  return menu
}

module.exports = {
  scrape: scrapeAroy,
  url: 'http://www.aroy.co.nz/menu.html'
}
