var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

app.post('/details/',(req,resp)=>{

    console.log(JSON.stringify(req.body));
    resp.send("OK");
    
})

app.listen((process.env.PORT || 8088),function(){
    console.log('App is up and running');
});