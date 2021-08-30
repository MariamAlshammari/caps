'use strict';
const events = require('../events')

let order={
    store:'Mariam-Grill-Resturant',
    orderID:'e5eb46a5-3823-49de-8ff9-8e50c4c74593',
    customer:'Emily Morar',
    address:'Maxieton'
};


describe('testing event handlers', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
      
    it('pickup event Work', async () => {
        events.emit('pickup', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('in-transit event Work ', async () => {
        events.emit('in-transit', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('delivered event Work  ', async () => {
        events.emit('delivered', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });


    afterAll(() => {
        consoleSpy.mockRestore();
    });

});

