'use strict';

const events = require("../../events");

// events.on('pickup', transitPackage);

function transitPackage(payload){
    
    setInterval(() => {
    // console.log(`DRIVER: picked up ${payload.orderID}ggggggg`);
    // let orderId=
    // events.emit('pickup',payload)
    // events.emit('in-transit',payload);
    // events.emit('delivered',payload)

    
    // console.log('--------transit-----------------');
   
}, 1000);

setInterval(() => {
    
    // console.log('delivered');
    // events.emit('delivered',payload)
    
    // console.log('---------------deliveredd----------');
   
}, 3000);
}

module.exports={transitPackage};
