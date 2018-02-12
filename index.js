var express = require('express'),
    http = require('http')

var app = express();
//app.use(express.bodyParser());

app.get('/details/',(req,resp)=>{

    console.log(JSON.stringify(req.body));
    resp.send("OK");
    
})

app.post('/details/',(req,resp)=>{

    console.log(JSON.stringify(req.body));
    resp.send("OK");
    
})

app.listen(8088);