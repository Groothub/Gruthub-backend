'use strict'

const Boom = require('boom');

exports.create = (request, replay) => {
    const { username } = request.payload
    
    if (username === 'lucas') {
         throw Boom.badData('Este usuário já existe!');
    } else {
        replay({ success: true });
    }
};