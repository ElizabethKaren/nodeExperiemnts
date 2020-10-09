const sayHi = require('./app')

const url = 'http://mylogger.io/log';

log = message => {
    //send HTTP request 
    console.log(message + ' <3 <3 <3')
}

exports.log = log 
// module.exports.endPoint = url 

// sayHi('Kenji')