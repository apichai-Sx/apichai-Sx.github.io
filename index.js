const http = require('http')
const https= require('https')
const url = require('url')
const {spawn} = require('child_process')
const fs = require("fs")

const server = http.createServer((req,res)=>{
	let body = [];
	req.on('error', err => {
      console.error(err);
      res.statusCode = 400;
      res.end();
    }).on('data', chunk => {
		try{
        body.push(chunk);
		}catch(e){
			res.statusCode = 200
			res.end("the chunk is not the types "+e)
		}
      })
	.on('end',() =>{
		let bdy = ''+Buffer.concat(body).toString();
    if (req.method === 'GET' ) && req.url === '/triger') {
      res.statusCode = 200;
      res.end("<h1>apichaiclinic from github</h1>");
    }
  });
});
server.listen(3000)
