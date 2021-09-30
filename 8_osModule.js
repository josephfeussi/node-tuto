//BUILT-IN MODULE
//OS Modules : provides us methods for interacting with OS and server 

const os = require('os');

//info on current  user 
const user = os.userInfo()
// 

//method returnssys uptime in seconds

console.log(`the system is ${os.uptime()} seconds`)

// 
const currntOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currntOS)