const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async function () {
  const server = Hapi.server({
    port:5000,
    host:process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
            "cors": true
    }
  });
  await server.start();
  server.route(routes);
  console.log(`Server berjalan pada halaman ${server.info.uri}`);
};

init();