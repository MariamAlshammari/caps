'use strict';

const events=require('../../events');
const handlers=require('./handlers');

events.on('pickup',handlers.transitPackage);


// events.on('pickup',transitPackage);

