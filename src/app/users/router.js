'use strict'

const Joi = require('joi');
const handler = require('./handlers');

module.exports = [{
    method: 'POST',
    path: '/api/v1/users',
    handler: handler.create,
    confg: {
        validate: {
            payload: Joi.object({
                username: Joi.string().require(),
                password: Joi.string().require()
            })
        }
    }
}];