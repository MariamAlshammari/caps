'use strict';
// const events = require('../events')
const caps=require('../caps');
const supertest = require("supertest");
const io=require('socket.io-client');
const HOST=process.env.HOST || 'http://localhost:3000';
const socket=io.connect(`${HOST}/caps`);


let order={
    store:'Mariam-Grill-Resturant',
    orderID:'e5eb46a5-3823-49de-8ff9-8e50c4c74593',
    customer:'Emily Morar',
    address:'Maxieton'
};


describe('testing events pool', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    it('connection',async()=>{
        caps.emit('connection', order);
        await consoleSpy();
        expect(await consoleSpy).toHaveBeenCalled();
       
    });
      
    it('pickUp  ', async () => {
        caps.emit('pickup', order);
        await consoleSpy();
        expect(await consoleSpy).toHaveBeenCalled();
    });

    it('in-transit   ', async () => {
        caps.emit('in-transit', order);
        await consoleSpy();
        expect(await consoleSpy).toHaveBeenCalled();
    });

    it('delivered    ', async () => {
        caps.emit('delivered', order);
        await consoleSpy();
        expect(await consoleSpy).toHaveBeenCalled();
    });


    afterAll(() => {
         consoleSpy.mockRestore();
    });

});

