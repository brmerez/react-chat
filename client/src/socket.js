import {io} from "socket.io-client";
const SERVER = "http://localhost:4001"; // seu IP aqui

export const socket = io(SERVER, {transports: ["websocket"]}).connect();
