//Step 1: Import all the modules which you require - using require('moduleName')
//Build in module - No installation
const http  = require('http')

//Step 2: Create a web server- HTTP,Express

http.createServer((request,response)=>{

response.write('Hello Guys How are you?')

response.end()

}).listen(3000)  //Step Start your backend server

console.log("Sever running at http://localhost:3000")