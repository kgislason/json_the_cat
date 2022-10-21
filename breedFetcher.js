const request = require('request');

let userArgs = process.argv.slice(2);

let catBreed = userArgs[0].toLowerCase().slice(0, 3);

let requestURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + catBreed;

console.log(typeof catBreed);
console.log(requestURL);

request(requestURL, function (error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  console.log(data[0].description);
});