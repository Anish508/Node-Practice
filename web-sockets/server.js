const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();

app.use(express.json());

const server = http.createServer(app);

//initiate socket.io and attach it to http server

const io = socketIo(server);

app.use(express.static("public"));

const users = new Set();

io.on("connection", (socket) => {
  console.log("A user is now connected ");

  //handle users when they will join the chat
  socket.on("join", (username) => {
    if ([...users].includes(username)) {
    socket.emit("usernameError", "Username already taken");
    return;
   }
    users.add(username);
    socket.username = username;

    //brodcast to all clients/users that a new user has joined

    io.emit("userJoined", username);

    //send the updated user list to all clients
    io.emit("userList", Array.from(users));
  });
  //handle incomingc chat messages
  socket.on("chatMessage", (message) => {
    //brodcast the received message to all connected clients
    io.emit("chatMessage", message);
  });
  //handle user disconnection
  socket.on("disconnect", () => {
    console.log("User is disconnected");
    users.forEach((user) => {
      if (user === socket.username) {
        users.delete(user);

        io.emit("userLeft", user);

        io.emit("userList", Array.from(users));
      }
    });
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server is now running on http://localhost:", PORT);
});
