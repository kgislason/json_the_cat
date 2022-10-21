const request = require('request');

// Allow command line arguments
const userArgs = process.argv.slice(2);

// Assign cat breed (string) to variable
const catBreed = userArgs[0];
const apiRequestURL = 'https://api.thecatapi.com/v1/breeds/search?q=';
let requestURL = apiRequestURL;

// Check if catBreed is undefined
if (catBreed !== undefined) {
  requestURL = apiRequestURL + catBreed;
}

// Make our request to the Cat API
request(requestURL, function(error, response, body) {
  if (error !== null) {
    // Log errors
    console.error('Error: ', error);
  } else {
    // Parse the JSON string into an object
    const data = JSON.parse(body);

    if (data.length === 0) {
      // Check if the array is empty
      console.log("We did not find a cat breed with that name. Try again!");
    } else if (data[0].length !== 0) {
      // If not, grab the description
      console.log("You search returned: ", data[0].name);
      console.log(data[0].description);
    }
  }
});