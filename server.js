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
