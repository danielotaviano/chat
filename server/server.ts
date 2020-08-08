const io = require("socket.io")(3001);

const messages: any = [];
const users: any = [];

io.on("connect", (socket: any) => {
  socket.emit("selfId", socket.id);
  socket.emit("newMessage", messages);

  socket.on("newMessage", (data: any) => {
    console.log(data);
    messages.push(data);
    socket.broadcast.emit("newMessage", messages);
  });
  socket.on("newUser", (data: any) => {
    let { name } = data;

    function verifyName(nameToVerify: any) {
      users.forEach((user: any) => {
        if (user.user == nameToVerify) {
          name = name + "(1)";
          console.log(name);
          verifyName(name);
        }
      });
    }
    verifyName(name);

    users.push({ user: name, user_id: socket.id });
    socket.emit("newUsers", users);
    socket.broadcast.emit("newUsers", users);
  });

  socket.on("disconnect", () => {
    users.map((user: any, index: number) => {
      if (user.user_id == socket.id) {
        users.splice(index, 1);
      }
    });
    socket.broadcast.emit("newUsers", users);
  });
});
