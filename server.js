var express = require("express");
const app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var path = require("path");
const PORT = process.env.PORT || 5500;

const DEFAULT_VALUES = {
  life: 40,
  poison: 0,
  coin: "..."
};

var currentValues = {
  "red-h-counter": DEFAULT_VALUES.life,
  "red-p-counter": DEFAULT_VALUES.poison,
  "blue-h-counter": DEFAULT_VALUES.life,
  "blue-p-counter": DEFAULT_VALUES.poison,
  "coin-counter": DEFAULT_VALUES.coin
};

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

io.sockets.on("connection", socket => {
  let address = socket.request.connection.remoteAddress;
  console.log(address + " connected");

  //initiate all current values when client connects.
  io.emit("init", currentValues);

  // +1 Red HP
  socket.on("redHpUp", val => {
    currentValues["red-h-counter"]++;
    io.emit("redHpUp", currentValues["red-h-counter"]);
  });

  // -1 Red HP
  socket.on("redHpDown", val => {
    currentValues["red-h-counter"]--;
    io.emit("redHpDown", currentValues["red-h-counter"]);
  });

  //Reset Red HP
  socket.on("resetRedHp", () => {
    currentValues["red-h-counter"] = DEFAULT_VALUES.life;
    io.emit("resetRedHp", currentValues["red-h-counter"]);
  });

  // +1 Blue HP
  socket.on("blueHpUp", val => {
    currentValues["blue-h-counter"]++;
    io.emit("blueHpUp", currentValues["blue-h-counter"]);
  });

  // -1 Blue HP
  socket.on("blueHpDown", val => {
    currentValues["blue-h-counter"]--;
    io.emit("blueHpDown", currentValues["blue-h-counter"]);
  });

  //Reset Blue HP
  socket.on("resetBlueHp", () => {
    currentValues["blue-h-counter"] = DEFAULT_VALUES.life;
    io.emit("resetBlueHp", currentValues["blue-h-counter"]);
  });

  // +1 Red Poison
  socket.on("redPoisonUp", val => {
    currentValues["red-p-counter"]++;
    io.emit("redPoisonUp", currentValues["red-p-counter"]);
  });

  // -1 Red Poison
  socket.on("redPoisonDown", val => {
    currentValues["red-p-counter"]--;
    io.emit("redPoisonDown", currentValues["red-p-counter"]);
  });

  //Reset Red Poison
  socket.on("resetRedPoison", () => {
    currentValues["red-p-counter"] = DEFAULT_VALUES.poison;
    io.emit("resetRedPoison", currentValues["red-p-counter"]);
  });

  // +1 Blue Poison
  socket.on("bluePoisonUp", val => {
    currentValues["blue-p-counter"]++;
    io.emit("bluePoisonUp", currentValues["blue-p-counter"]);
  });

  // -1 Blue Poison
  socket.on("bluePoisonDown", val => {
    currentValues["blue-p-counter"]--;
    io.emit("bluePoisonDown", currentValues["blue-p-counter"]);
  });

  //Reset Blue Poison
  socket.on("resetBluePoison", () => {
    currentValues["blue-p-counter"] = DEFAULT_VALUES.poison;
    io.emit("resetBluePoison", currentValues["blue-p-counter"]);
  });

  //Flip Coin
  socket.on("coinFlip", () => {
    let flip = Math.floor(Math.random() * 2) + 1;
    if (flip === 1) {
      currentValues["coin-counter"] = "Tails";
    } else {
      currentValues["coin-counter"] = "Heads";
    }
    io.emit("coinFlip", currentValues["coin-counter"]);
  });

  //Disconnect
  socket.on("disconnect", () => {
    console.log(address + " disconnected");
  });
});

http.listen(PORT, () => {
  console.log("listening on *: " + PORT);
});
