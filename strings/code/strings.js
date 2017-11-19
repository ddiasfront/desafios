const fs = require('fs');
const util = require('util');
const readline = require('readline');
require('util.promisify').shim();
const readFileAsync = util.promisify(fs.readFile);

const wordGenerator = (data) => {
  let wordsInitialArray = data.split(" ");
  return wordsInitialArray;
}

let characterCounter = 0;

readFileAsync('./initalData.txt', 'utf-8').then(file => {
  let filez = file;
  let captainAmerica = wordGenerator(filez);
  return captainAmerica;
}).then(captainAmerica => {
  let omegaRed = captainAmerica.toString();
  let aMovieFromWarnerBrothers = omegaRed.split('\n');
  return aMovieFromWarnerBrothers
}).then(aMovieFromWarnerBrothers => {
  let floydMayweather = []
  aMovieFromWarnerBrothers.map(item => {
    floydMayweather.push(item);
  })

  return floydMayweather
}).then(floydMayweather => {
  let wordsAdapter = []
  floydMayweather.map(item => {
    let newitem = item.split(" ");

    newitem.map(item => {

      if (item == '' || item == ' ') {
        wordsAdapter.push('\n');
      } else {
        wordsAdapter.push(item);
      }
    })

  })

  return wordsAdapter;
}).then(wordsAdapter => {

  wordsAdapter.map(item => {

    let finalWordsIs = item.split(",");

    finalWordsIs.map(item => {

      if (characterCounter >= 40 - item.length) {

        characterCounter = item.length;

        fs.appendFile('message.txt', '\n', (err) => {
          if (err) 
            throw err;
        });

        if (item == '' || item == ' ') {
          fs.appendFile('message.txt', ',', (err) => {
            if (err) 
              throw err;
          });
          characterCounter = 0
          characterCounter += 1;
        } else {
          fs.appendFile('message.txt', item + ' ', (err) => {
            if (err) 
              throw err;
          });
        }

      } else {
        if (item == '' || item == ' ') {
          fs.appendFile('message.txt', ',', (err) => {
            if (err) 
              throw err;
          });
          characterCounter += 1;
        } else {
          fs.appendFile('message.txt', item + ' ', (err) => {
            if (err) 
              throw err;
          });
          characterCounter += item.length + 1;
        }
      }

    })
  })

});