'use strict';

const events=require('./events');

require('./caps-part/Drivers/driver'),
require('./caps-part/Vendor/vendor');


events.on('pickup',(payload)=>{
    let Event={
        event:'pickup',
        time:new Date(),
        payload:payload,
    };
    console.log('Event', Event);

    console.log(`DRIVER: picked up ${payload.orderID}`);
    // events.emit('pickup',payload);
    events.emit('in-transit',payload);

    console.log('delivered');
    console.log(`DRIVER: delivered up ${payload.orderID}`);
    events.emit('delivered',payload);

});

events.on('in-transit',(payload)=>{
    let Event={
        event:'in-transit',
        time:new Date(),
        payload:payload,
    };
    console.log('Event', Event);
})

events.on('delivered',(payload)=>{
    let Event={
        event:'delivered',
        time:new Date(),
        payload:payload,
    };
    console.log('Event', Event);})



