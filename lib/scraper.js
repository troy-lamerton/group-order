const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

const menuUrls = ['http://www.aroy.co.nz/menu.html', 'https://hellpizza.com/nz/order/']

function scrapePage (url, outputPath, scrapeFunction) {
  
  function saveToFile (object, path) {
    // might be a short module for this
    console.log('save to file...', path)
  }

  request(url, (error, response, html) => {
    // requesting to a url which ends with .html results in an undefined response.status
    if (!error && (response.status === 200 || response.status === undefined)) {
      if (html) {
        
        saveToFile(scrapeFunction(html), outputPath)

      } else {
        console.error('Error: ', `The response from ${url} didn\'t return any html`)
      }
    } else {
      console.error('Error:', error)
    }

  })

}


scrapePage(menuUrls[0])
module.exports = scrapePage