const fs = require('fs');
var filesFolder = './mergedJSON/';


fs.readdir(filesFolder, function (err, files) {
  files.forEach(function (file) {
    var csv = 'pid,English,Chinese\n'
    // {
    //     "pidNo": "662449",
    //     "english": "PERFECT Lips, 10ml",
    //     "chinese": "完美润唇蜜，10ml"
    // },
    file.forEach(function (obj) {
      var line = '';
      line += obj.pidNo + ',' + obj.english + ',' + obj.chinese + '\n'
      csv += line;
    })
    var filename = './csv/'+ file + '.csv';
    fs.writeFile(filename, file, function (err) {
      console.log('File successfully written! - Check your project directory for the json files');
    })
  });
})
//
// var parseDesigners = [];
//
// for(var i=0; i<designers.length; i++) {
//   parseDesigners.push(designers[i].split(" ").join("_") + '.json')
//
// }
//
// for(var i=0; i<parseDesigners.length; i++) {
//   var designer = parseDesigners[i]
//   var products = [];
//   var englishDescription;
//   var chineseDescription;
//
//   try {
//    englishDescription = require(english + designer);
//    chineseDescription = require(chinese + designer);
//   }
//   catch (e) {
//    englishDescription = false;
//   }
//
//   for (var d=0; d < englishDescription.length; d++) {
//     if(englishDescription && englishDescription[d].pidNo == chineseDescription[d].pidNo) {
//       products.push({
//         "pidNo": englishDescription[d].pidNo,
//         "english": englishDescription[d].english,
//         "chinese": chineseDescription[d].chinese,
//       })
//
//       var filename = './mergedJSON/'+ designer;
//       fs.writeFile(filename, JSON.stringify(products, null, 4), function (err) {
//         console.log('File successfully written! - Check your project directory for the json files');
//       })
//     }
//   }
// }
