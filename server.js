const path = require('path');
const express = require('express');
const app = express();
const favicon = require('serve-favicon');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Listening on port ${port}`));
