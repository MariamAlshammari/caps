'use strict';
const port =3000;
var faker = require('faker');
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const connectionToCaps=io.connect('http://localhost:3000');
const connectionToCapsNameSpace=io.connect(`${host}/caps`);
const STORE_NAME=process.env.STORE_NAME || 'Mariam-Grill-Resturant';


setInterval(() => {
    // console.log('orderrr');
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
        
        connectionToCapsNameSpace.emit('pickup',order);
        // console.log(order);
        
        
        
        
    }, 5000);
    
    
    
    connectionToCapsNameSpace.on('delivered',(payload)=>{
        // console.log(`DRIVER: delivered up ${payload.orderID}`);
        console.log(`VENDOR: Thank you for delivering  ${payload.orderID} 🥰 `);
        // let Event={
        //     event:'delivered',
        //     time:new Date(),
        //     payload:payload,
        // };
        // console.log('Event', Event);
    })
    



    

    
    
    



