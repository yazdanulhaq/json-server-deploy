const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// In-memory database
const data = {
  users: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ],
};

const router = jsonServer.router(data); // Use the in-memory object

server.use(middlewares);
server.use(router);

module.exports.handler = async (event, context) => {
  return new Promise((resolve) => {
    server.listen(3000, () => {
      resolve({
        statusCode: 200,
        body: JSON.stringify({ message: 'JSON Server is running in-memory' }),
      });
    });
  });
};
