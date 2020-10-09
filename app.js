const log = require('./logger')

sayName = name =>{
    if (name === 'Greg' || name === 'Greggory'){
        console.log(name + ', you are the most beatiful')
    } else {
        console.log(name + ', you are beautiful')
    }
}

module.exports = sayName

sayName('Liz') //Global
sayName('Greggory') //Global 

const message = 'Hi GREG!'

log('I hope this is working lol')
