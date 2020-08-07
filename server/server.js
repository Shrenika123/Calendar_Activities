const jsonServer = require('json-server');
const express=require('express')
const app=express()
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;
// const path = require("path");

 app.use(express.static("public"))


// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'client/build')))


// app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'))
//   })

server.use(middlewares);
server.use(router);

server.listen(port,() => console.log(`Listening on port ${port}`));