const fs = require('fs').promises;
const axios = require('axios');

axios.get('https://digimon-api.vercel.app/api/digimon')
  .then((resp) => {
    const digimons = resp.data;
    const rutasDigimons = digimons.map((digimon) => `/name/${digimon.name}`).join('\n');

    return fs.writeFile('digimons-routes.txt', rutasDigimons);
  }).then((info) => {
    console.log('Archivo rutas creado');
  }).catch((error) => console.log(error.message));
