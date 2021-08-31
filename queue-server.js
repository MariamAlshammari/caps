// const { Socket } = require('socket.io');

const port=3000;
// http://localhost:3000
const io=require('socket.io')(port);
// http://localhost:3000/caps

const caps=io.of('/caps');
const uuid = require('uuid').v4;
require('./caps-part/Vendor/vendor');
require('./caps-part/Drivers/driver');


const undeliveredMessageQueue = {
    msgs: {}
};

caps.on('connection',socket=>{
     // recieve picked from vendor
     console.log('connect');
     socket.on('pickup',payload=>{
         //send picked to driver

         let Event={
            event:'pickup',
            time:new Date(),
            payload:payload,
        };
        console.log('Event', Event);
         let id =uuid();
        //  console.log('idd',id);
         undeliveredMessageQueue.msgs[id]= payload;
         
        //  socket.emit('addedinqueue',payload);
        socket.emit('messages',payload);
        //  console.log('adddd');

        caps.emit('pickup',{id,payload:undeliveredMessageQueue.msgs[id]});


     });

     socket.on('in-transit',payload=>{
        let Event={
            event:'in-transit',
            time:new Date(),
            payload:payload,
        };
        console.log('Event', Event);
               let id =uuid();
         
        //  console.log(id,'transsssit');

         undeliveredMessageQueue.msgs[id]={event: 'in-transit', payload};
         caps.emit('in-transit',{id,payload:undeliveredMessageQueue.msgs[id]})
     });

     socket.on('delivered',payload=>{
        let Event={
            event:'delivered',
            time:new Date(),
            payload:payload,
        };
        console.log('Event', Event);
        let id =uuid();
        // console.log(id,'delivereed');

        undeliveredMessageQueue.msgs[id]={event: 'delivered', payload};

        caps.emit('delivered',{id,payload:undeliveredMessageQueue.msgs[id]})
    });

    socket.on('getAll',(payload)=>{
        // console.log('get allll');
        // undeliveredMessageQueue.msgs[id]={payload};
        Object.keys(undeliveredMessageQueue.msgs).forEach(id=>{
            socket.emit('messages',{id,payload:undeliveredMessageQueue.msgs[id]})
        })
        // console.log('gggg');
    });

    socket.on('received',id=>{
        console.log('receeeiveeed');
        delete undeliveredMessageQueue.msgs[id];
        console.log('deleeted');
    });


})