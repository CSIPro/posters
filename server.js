<<<<<<< HEAD
const express = require('express');
const { resolve } = require('path');

const app = express();
app.use(express.static(`${__dirname}/build`));

app.get('/', (req, res) => {
  res.sendFile(resolve('./build/index.html'));
});

app.listen(process.env.PORT || 3000, (error) => {
  if (error) return;
  console.log(`La aplicación corre en el puerto ${process.env.PORT || 3000}`);
})
=======
var express = require('express');

var app = express();

app.use('/static', express.static(`${__dirname}/build/static`));

app.get('*', (req, res) => {
  res.sendFile(require('path').resolve(__dirname, './build/index.html'));
})

app.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    return error.message;
  } else {
    console.log(`La aplicación está corriendo en el puerto ${process.env.PORT || 3000}`);
  }
})
>>>>>>> 1d265f734bafdab85ecb68c49b6b2b87581849cd
