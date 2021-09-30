const http = require('http');

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('Here is our about page')
    }
    res.end(`
     <h1>Ooopssssssssssss !!!</h1>
     <p>We cant reache the page you are looking for  </p>
     <a href="/">Go Back</a>
    `)
})

server.listen(5000)