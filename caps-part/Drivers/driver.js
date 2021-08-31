'use strict';

// const events=require('../../events');
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const connectionToCapsNameSpace=io.connect(`${host}/caps`);
const handlers=require('./handlers');

const driver={clientId:'driver',event:'pickup'};

connectionToCapsNameSpace.emit('getAll',driver);

connectionToCapsNameSpace.on('messages',msgs=>{
    if(msgs.payload.event=='pickup'){
        // console.log(msgs,'mssa');
        handlers.transitPackage(msgs)

    }

})

connectionToCapsNameSpace.on('pickup',handlers.transitPackage);


// events.on('pickup',transitPackage);

