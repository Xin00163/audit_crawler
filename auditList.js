var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Promise = require("bluebird");
var app = express();
var designers = require('./designers');

var parseDesigners = [];

for(var i=0; i<designers.length; i++) {
  parseDesigners.push(designers[i].split(" ").join("_"))
}

app.get('/scrape', function (req, res) {

  Promise.map(parseDesigners, function(designer) {
    var url = "https://www.net-a-porter.com/us/zh/Shop/Designers/" + designer + "?pn=1&npp=view_all&image_view=product&dScroll=0";
    // var url = "https://www.net-a-porter.com/us/en/Shop/Designers/" + designer + "?pn=1&npp=view_all&image_view=product&dScroll=0";
    request(url, function (error, response, html) {
      if (!error) {
        var $ = cheerio.load(html);

        var products = [];

        $rows = $('.description');

        $rows.each(function (row) {
          var description = $(this).find('a').attr('title');
          var pid = $(this).find('a').attr('href').split('/')[2];
          products.push({
            'chinese': description,
            // 'english': description,
            'pidNo': pid
          })
        });

        // var filename = './english/'+ designer + '.json';
        var filename = './chinese/'+ designer + '.json';
        fs.writeFile(filename, JSON.stringify(products, null, 4), function (err) {
          console.log('File successfully written! - Check your project directory for the json files');
        })
      }
    })
  }).then(function() {
    console.log("done");
  });

  res.send('Check your console!');

})

app.listen(3000, function () {
  console.log('App listening on port 3000')
})
