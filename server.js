const express = require("express");
const http = require("http");

const app = express();
const server = http.Server(app);

//どのHTMLファイルを返すのか
app.use(express.static(__dirname + "/public"));

server.listen(3000, () => {
  console.log("サーバーが起動しました");
});
