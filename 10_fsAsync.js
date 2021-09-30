const { readFileSync, writeFileSync } = require('fs');
//similar to ..
// const fs = require('fs);
//and to ...
// fs.readFileSync
 
//we shall reasd from a file

console.log('Start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `Here is the reseult : ${first}, ${second} `, 
{flag: 'a'}
//the flag pemits to add nw line rather thean over writing
)


console.log('Done with this task')
console.log('starting the next one ')
