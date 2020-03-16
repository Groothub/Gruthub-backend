'use strict';

const Hapi = require('hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    async function registers() {
      await server.register({
        register: require('hapi-router'),
        options: {
          routes: 'src/app/**/Router.js'
        }
        },function (err) {
            if (err) throw err;
        }
      );
    }
    
    await registers()
      .then(() => console.log('All the Plugins are added'))
      .catch((err) => console.log('Server Error', err));

    await server.start();
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();