const express = require('express');
const PORT = process.env.PORT || 3000;

express()
  .get('/', (req, res) => res.send('coo'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));