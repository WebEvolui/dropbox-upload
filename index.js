// ------------------------------------
// Primeiro colocar o scope do TOKEN e depois gerar o token lá no painel do dropbox
// ------------------------------------

// require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;
require('dotenv/config');
const fs = require('fs');
const path = require('path');

var dbx = new Dropbox({ accessToken: process.env.TOKEN });

// dbx.filesListFolder({ path: '' })
//     .then(function (response) {
//         console.log(response.result);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

fs.readFile(path.join(__dirname, '/teste.rar'), (err, contents) => {
    if (err) {
      console.log('Error: ', err);
    }

    // This uploads teste.rar to the root of your dropbox
    dbx.filesUpload({ path: '/teste.rar', contents })
      .then((response) => {
        console.log(response);
      })
      .catch((uploadErr) => {
        console.log(uploadErr);
      });
  });
