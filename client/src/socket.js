import {io} from "socket.io-client";
const SERVER = "http://192.168.1.104:4001"; // seu IP aqui

export const socket = io(SERVER, {transports: ["websocket"]}).connect();