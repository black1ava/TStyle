const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use('/public/assets', express.static('public/assets'));

app.get('/', function(req, res){
  return res.render('index');
});

app.listen(PORT, function(){
  console.log(`Server is running on port ${ PORT }`);
});
