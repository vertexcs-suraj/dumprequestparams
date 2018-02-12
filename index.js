var express = require('express'),
    http = require('http')

var app = express();
//app.use(express.bodyParser());

app.post('/details/',(req,resp)=>{

    console.log(JSON.stringify(req.body));
    resp.send("OK");
    
})

app.listen((process.env.PORT || 8088),function(){
    console.log('App is up and running');
});