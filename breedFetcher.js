const request = require('request');

// Allow command line arguments
const userArgs = process.argv.slice(2);

// First argument is cat breed (string)
const catBreed = userArgs[0].toLowerCase().slice(0, 3);

// Add that to the request url query parameters
const requestURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + catBreed;

// Make our request to the Cat API
request(requestURL, function(error, response, body) {
  // Log errors
  if (error !== null) {
    console.error('error:', error);
  } else {
    // Parse the JSON string into an object
    const data = JSON.parse(body);

    // Check if the array is empty
    if (data[0].length === 0) {
      console.log("We did not find a cat breed with that name. Try again!");
    } else if (data[0].length !== 0) {
      // If not, grab the description
      console.log(data[0].description);
    }
  }
});