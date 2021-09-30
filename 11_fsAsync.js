const { readFile, writeFile } = require('fs');

//we provide a callback 
console.log('start')

readFile('./content/first.txt', 'utf8',  (err,result) => {
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err)
            return
        }
    })
    const second = result
    writeFile('./content/resultAsync.txt', 
    `Here is the reseult : ${first}, ${second} `, 
    (err, result) => {
        if(err){
            console.log(err)
            return
        }
        console.log('Done with  this !!!!')
    }
     )
})

console.log('Syarting the next task')