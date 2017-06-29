'use strict';

fetch(`https://api.github.com/users/mscottcam`)
  .then((data) => {
    return data.jsno();
  })
  .then(data => {
    console.log(data.name, data.followers);
  })
  .catch( err => console.error(err)
  );



  // console.log(response.name, response.followers);


// theAnswer.
//   then(result => console.log(`The answer is: ${result}`));
