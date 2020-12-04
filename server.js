var express = require("express");
const app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

io.on("connection", socket => {
  console.log("a user connected");

  // +1 Red HP
  socket.on("redHpUp", val => {
    val++;
    io.emit("redHpUp", val);
  });

  // -1 Red HP
  socket.on("redHpDown", val => {
    val--;
    io.emit("redHpDown", val);
  });

  //Reset Red HP
  socket.on("resetRedHp", () => {
    io.emit("resetRedHp", 20);
  });

  // +1 Blue HP
  socket.on("blueHpUp", val => {
    val++;
    io.emit("blueHpUp", val);
  });

  // -1 Blue HP
  socket.on("blueHpDown", val => {
    val--;
    io.emit("blueHpDown", val);
  });

  //Reset Blue HP
  socket.on("resetBlueHp", () => {
    io.emit("resetBlueHp", 20);
  });

  // +1 Red Poison
  socket.on("redPoisonUp", val => {
    val++;
    io.emit("redPoisonUp", val);
  });

  // -1 Red Poison
  socket.on("redPoisonDown", val => {
    val--;
    io.emit("redPoisonDown", val);
  });

  //Reset Red Poison
  socket.on("resetRedPoison", () => {
    io.emit("resetRedPoison", 0);
  });

  // +1 Blue Poison
  socket.on("bluePoisonUp", val => {
    val++;
    io.emit("bluePoisonUp", val);
  });

  // -1 Blue Poison
  socket.on("bluePoisonDown", val => {
    val--;
    io.emit("bluePoisonDown", val);
  });

  //Reset Blue Poison
  socket.on("resetBluePoison", () => {
    io.emit("resetBluePoison", 0);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(5500, () => {
  console.log("listening on *:5500");
});
