'use strict';

const events = require("../../events");

// events.on('pickup', transitPackage);

function transitPackage(payload){
    let Event={
        event:'pickup',
        time:new Date(),
        payload:payload,
    };
    console.log('Event', Event);

    console.log(`DRIVER: picked up ${payload.orderID}`);
    setTimeout(() => {
    // console.log(`DRIVER: picked up ${payload.orderID}ggggggg`);
    // let orderId=
    // events.emit('pickup',payload)
    events.emit('in-transit',payload);
    // events.emit('delivered',payload)

    
    console.log('--------transit-----------------');
   
}, 1000);

setTimeout(() => {
    
    console.log('delivered');
    events.emit('delivered',payload)
    
    console.log('---------------deliveredd----------');
   
}, 3000);
}

module.exports={transitPackage};
