//Modules
 
// CommonJS , every file is a module (by default)
//Modules -  Encapsulated code (only share minimum)

const names = require('./4_names')
const sayHi = require('./5_utils')

//Data from alternatif method to export
const num = require('./6_alternative')
const singlePerson = require('./6_alternative')

console.log(names)
sayHi('susane')
sayHi(names.john)
sayHi(names.peter)

console.log(singlePerson)

sayHi(singlePerson.items)
sayHi(singlePerson.singlePerson.name)
