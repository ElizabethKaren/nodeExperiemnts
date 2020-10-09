const sayHi = require('./app')

const url = 'http://mylogger.io/log';

log = message => {
    //send HTTP request 
    console.log(message + ' <3 <3 <3')
}

module.exports = log 
// module.exports.endPoint = url 

// sayHi('Kenji')