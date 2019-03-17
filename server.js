const express = require('express')
const PORT = 5000

express()
  .get('/', (req, res) => res.render('hello'))
  .get('/cool', (req, res) => res.send('cool'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))