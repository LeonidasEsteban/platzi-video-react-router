const express = require('express');

const app = express();

app.get('*', (req, res) => {
  console.log(req.url)
  res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Platzi Video</title>
        <!-- <link rel="stylesheet" href="dist/css/home.7646f097e8e64cbf8f09.css"> -->
      </head>
      <body>
        <div id="home-container">Hola mundo! ${req.url}</div>
        <div id="modal-container"></div>
        <script src="http://localhost:9000/js/app.js"></script>
        <!-- <script src="dist/js/home.7646f097e8e64cbf8f09.js"></script> -->
      </body>
    </html>
  `)
  res.end();
})

app.listen(3000)
console.log('el server prendió en el puerto 3000')
