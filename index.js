// server.js
const jsonServer = require("json-server");

const PORT = 3001;

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// middlewares de requisição
server.use(middlewares);
server.use(jsonServer.bodyParser);

// endpoints
server.post('/', (_req, res) => {
  res.status(200).jsonp({})
})

// outros
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
