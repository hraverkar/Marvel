const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static(__dirname +'/dist/my-dream-app'));
app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname + 'dist/my-dream-app/index.html'));
});

console.log("PortOpen");
