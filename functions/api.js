const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data.json'); // Path to your data.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    const port = 3000;
    const app = server.listen(port, () => {
      resolve({
        statusCode: 200,
        body: JSON.stringify({ message: "JSON Server is running" }),
      });
    });

    app.on('error', (error) => {
      reject({
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      });
    });
  });
};

module.exports = { handler };