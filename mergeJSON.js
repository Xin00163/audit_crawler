const fs = require('fs');
var designers = require('./designers');
var chinese = './chinese/';
var english = './english/';

var parseDesigners = [];

for(var i=0; i<designers.length; i++) {
  parseDesigners.push(designers[i].split(" ").join("_") + '.json')

}

for(var i=0; i<parseDesigners.length; i++) {
  var designer = parseDesigners[i]
  var products = [];
  var englishDescription;
  var chineseDescription;

  try {
   englishDescription = require(english + designer);
   chineseDescription = require(chinese + designer);
  }
  catch (e) {
   englishDescription = false;
  }

  for (var d=0; d < englishDescription.length; d++) {
    if(englishDescription && englishDescription[d].pidNo == chineseDescription[d].pidNo) {
      products.push({
        "pidNo": englishDescription[d].pidNo,
        "english": englishDescription[d].english,
        "chinese": chineseDescription[d].chinese,
      })

      var filename = './mergedJSON/'+ designer;
      fs.writeFile(filename, JSON.stringify(products, null, 4), function (err) {
        console.log('File successfully written! - Check your project directory for the json files');
      })
    }
  }
}
