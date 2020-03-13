'use strict';

const Hapi = require('hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    await server.register({
        name: 'hapi-router',
        pkg: require('hapi-router'),
        register: async function (server, options) {
            options: {
                routes: './app/**/router.js'
            }
        },
   
    });

    await server.start();
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();