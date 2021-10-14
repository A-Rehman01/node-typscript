const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => console.log("running..."));

customEmitter.emit("response");

// Ye hota he jab server bhi bnate ho
