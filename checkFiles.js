const fs = require('fs');
var designers = require('./designers');
var chinese = './chinese/';
var english = './english/';

var parseDesigners = [];

for(var i=0; i<designers.length; i++) {
  parseDesigners.push(designers[i].split(" ").join("_") + '.json')
}

chineseFiles = [];
englishFiles = [];

fs.readdirSync(chinese).forEach(file => {
  chineseFiles.push(file);
})

fs.readdirSync(english).forEach(file => {
  englishFiles.push(file);
})

var missingChinese = [];

parseDesigners.map(function (designer) {
  if (chineseFiles.indexOf(designer) == -1) {
    missingChinese.push(designer);
  }
})

console.log(missingChinese);
// [
//   'Aerin_Beauty.json',
//   'Aesop.json',
//   'Alaïa_Beauty.json',
//   'Bobbi_Brown.json',
//   'Colbert_MD.json',
//   'DERMARCHÉ_LABS.json',
//   'Kilian.json',
//   'Lancôme.json',
//   'Moon_Juice.json',
//   'Nannette_de_Gaspé.json',
//   'Natura_Bissé.json',
//   'Philip_B.json',
//   'REVERENCE_DE_BASTIEN.json',
//   'Rodin.json',
//   'Vernon_François.json',
//   'Victoria_Beckham_Estée_Lauder.json',
//   'Votary.json'
// ]

var missingEnglish = [];

parseDesigners.map(function (designer) {
  if (englishFiles.indexOf(designer) == -1) {
    missingEnglish.push(designer);
  }
})

console.log(missingEnglish);
// [
//   'Alaïa_Beauty.json',
//   'D.S._&_Durga.json',
//   'David_Mallett.json',
//   'Davines.json',
//   'DERMARCHÉ_LABS.json',
//   'Elizabeth_and_James_Nirvana.json',
//   'KENZOKI.json',
//   'Lancôme.json',
//   'Laura_Mercier.json',
//   'Michael_Van_Clarke.json',
//   'Nails_inc.json',
//   'Nannette_de_Gaspé.json',
//   'Natura_Bissé.json',
//   'Neat_Nutrition.json',
//   'PRTTY_PEAUSHUN.json',
//   'Susanne_Kaufmann.json',
//   'Vernon_François.json',
//   'Victoria_Beckham_Estée_Lauder.json',
//   'Wander_Beauty.json'
// ]

// https://www.net-a-porter.com/us/en/Shop/Designers/Neat_Nutrition?pn=1&npp=view_all&image_view=product&dScroll=0
