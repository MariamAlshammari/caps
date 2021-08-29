'use strict';
const events=require('../../events');
var faker = require('faker');

const STORE_NAME=process.env.STORE_NAME || 'Mariam-Grill-Resturant';

 

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
    
    
    events.on('delivered',(payload)=>{
        console.log(`VENDOR: Thank you for delivering  ${payload.orderID} 🥰 `);
    })
    
    
    



