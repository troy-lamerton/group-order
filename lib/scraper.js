"use scrict";
const fs = require('fs')
const path = require('path')

const request = require('request')
const cheerio = require('cheerio')


function scrapePage (url, outputPath, scrapeFunction) {

  function saveToFile (object, path) {
    // might be a short module for this
    console.log(object)
    console.log('save to the file...', path)
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

// 'https://hellpizza.com/nz/order/'

const aroyScraper = require('../restaurants/aroy')
scrapePage(aroyScraper.url, path.join(__dirname, '/scraped_menus/aroy.json'), aroyScraper.scrape)

module.exports = scrapePage
