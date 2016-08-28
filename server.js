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
