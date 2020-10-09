const path = require('path')
const pathObj = path.parse(__filename)
const os = require('os')
const fs = require('fs')
const files = fs.readdirSync('./')
const EventEmitter = require('events')

sayName = obj =>{
    if (obj.name === 'Greg' || obj.name === 'Greggory'){
        console.log(obj.name + ', you are the most beatiful')
    } else {
        console.log(obj.name + ', you are beautiful')
    }
}

const emitter = new EventEmitter()

emitter.on('sayName', sayName)

emitter.emit('sayName', {name: 'Greg'})

// const totalMem = os.totalmem()
// const freeMem = os.freemem()
// require('./logger')

// exports.sayHi = sayName

// sayName('Liz') //Global
// sayName('Greggory') //Global 

// const message = 'Hi GREG!'

// log('I hope this is working lol')

// // console.log('Total Memoroy: ' + totalMem)

// // console.log('Free Memory: ' + freeMem)

// console.log(`Total Amount of Gregs is ${totalMem}`)

// console.log(files)


