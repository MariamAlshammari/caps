'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';
const connectionToCapsNameSpace=io.connect(`${host}/caps`);
// connectionToCapsNameSpace.emit('getAll');
function transitPackage(payload){
    let Event={
        event:'pickup',
        time:new Date(),
        payload:payload,
    };
    // console.log('Event', Event);

    
    setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.id}`);
    
    connectionToCapsNameSpace.emit('in-transit',payload);

    let Event={
        event:'in-transit',
        time:new Date(),
        payload:payload,
    };
    // console.log('Event', Event);

    
    // console.log('--------transit-----------------');
   
}, 1500);

setTimeout(() => {
    
    console.log('delivered');
    console.log(`DRIVER: delivered up ${payload.id}`);
    // console.log(`VENDOR: Thank you for delivering  ${payload.orderID} 🥰 `);
    connectionToCapsNameSpace.emit('delivered',payload);

    
        let Event={
            event:'delivered',
            time:new Date(),
            payload:payload,
        };
        // console.log('Event', Event);
    // console.log('---------------deliveredd----------');
   
}, 3000);

connectionToCapsNameSpace.emit('recieved',payload.id)
}

module.exports={transitPackage};
