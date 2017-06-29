'use strict';

const will = fetch('https://api.github.com/users/52lions06');
const mscottcam = fetch('https://api.github.com/users/mscottcam');
const daviddinnison = fetch('https://api.github.com/users/daviddinnison'); 

Promise.all([will, mscottcam, daviddinnison])
  .then( (arrayOfPromises) => {
    return arrayOfPromises.map((prom) => prom.json());
    console.log(arrayOfPromises);
  })
  .then ((results) => {
    return results.map((promise) => {
     console.log(promise.PromiseValue.public_repos);
    });
  });
  