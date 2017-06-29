'use strict';

const will = fetch('https://api.github.com/users/52lions06');
const mscottcam = fetch('https://api.github.com/users/mscottcam');
const daviddinnison = fetch('https://api.github.com/users/daviddinnison');

Promise.all([ will, mscottcam, daviddinnison ])
  .then(responses => {
    return responses.map(response => response.json());
  })
  .then (jsonPromises => {
    return Promise.all(jsonPromises)
  })
  .then(jsonResults => {
    return jsonResults.forEach(result =>
      console.log(result.public_repos))
  })
  
