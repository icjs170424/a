import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

/* eslint-disable no-console */

const port = 9142
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware') (compiler, {
   noInfo: true,
   publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.get('/users', function(req, res) {
      // hard coding for simplicity, real implementation would use a proper store
      res.json([
            {"id": 1, "firstName": "Barney", "lastName": "Rubble", "email": "Barney@::1"},
            {"id": 2, "firstName": "Fred", "lastName": "Flintstone", "email": "Fred@::1"},
            {"id": 3, "firstName": "Wilma", "lastName": "Flintstone", "email": "Wilma@::1"}
      ]);
});


app.listen(port, function(err)  {
   if (err) {
      console.log(err);
   } else {
      open('http://localhost:' + port);
   }
});
