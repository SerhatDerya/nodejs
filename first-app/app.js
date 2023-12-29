// *** OS *** //

/* const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// Template String
// ES6 / ES2015: ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`) */

// ** File System ** //

/* const fs = require('fs');

//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
}); */

// ** Events ** //

/* const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register an listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://'}); */

// ** Extending EventEmitter ** //

/* const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message'); */

// ** HTTP Module ** //

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});



server.listen(3002);

console.log('Listening on port 3002...');

