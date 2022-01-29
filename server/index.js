const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const cors = require("cors");

const PORT = 4001;
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server)

io.on("connection", socket =>{
    console.log("Nova conexão:\t" + socket.id);
    socket.on("message", ({username, message}) =>{
        console.log(`${username}:\t`, message);
        io.sockets.emit("message", {uid: socket.id, username, msg: message, dt: new Date().toISOString()})
    })
})

server.listen(PORT, () => console.log(`Listening on http://127.0.0.1:4001`));