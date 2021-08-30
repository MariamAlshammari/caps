'use strict';
const events=require('../../events');
var faker = require('faker');

const STORE_NAME=process.env.STORE_NAME || 'Mariam-Grill-Resturant';



events.on('delivered',(payload)=>{
    console.log(`DRIVER: delivered up ${payload.orderID}`);
    console.log(`VENDOR: Thank you for delivering  ${payload.orderID} 🥰 `);
    let Event={
        event:'delivered',
        time:new Date(),
        payload:payload,
    };
    console.log('Event', Event);
})



setInterval(() => {
    console.log('orderrr');
    let order={
        store:STORE_NAME,
        orderID:faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.city()
    }
    // let order={
        //     store:STORE_NAME,
        //     orderID:1,
        //     customer:'Sara',
        //     address:'Irbid'
        // }
        
        events.emit('pickup',order);
        // console.log(order);
        
        
        
        
    }, 5000);
    
    

    
    
    



