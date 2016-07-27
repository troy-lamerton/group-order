"use strict";
// This function returns an object in the format defined by scraped_menus/README.md
const cheerio = require('cheerio')

function scrapeAroy (html) {
  const menu = {}

  const $ = cheerio.load(html)

  $('#menuarea').children().slice(1).each(function (index, category) {
    // create a menu group key
    const groupName = $(category).attr('id')
    menu[groupName] = [];

    $(category).children().each(function (i, categoryItem) {
      const menuItem = {}

      // extract name
      let name = $('.menulist p', categoryItem)
                    .clone()    //clone the element
                    .children() //select all the children
                    .remove()   //remove all the children
                    .end()  //again go back to selected element
                    .text();
      const nameLines = name.match(/.+/g)
      if (nameLines.length > 1) name = nameLines.join('')

      // extract price
      let price = $('.menulist p em', categoryItem).text()
      price = price.slice(1)
      price = parseInt(price)

      // extract description


      // log for debugging
      if(Math.random() < 0.4) console.log('item:', menuItem)

    })

  })
  return menu
}

module.exports = {
  scrape: scrapeAroy,
  url: 'http://www.aroy.co.nz/menu.html'
}
