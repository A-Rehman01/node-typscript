// require("./writeinfile");
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 700,
  encoding: "utf-8",
});
//high water mark === control size
stream.on("data", (res) => console.log(res));
// console.log();
