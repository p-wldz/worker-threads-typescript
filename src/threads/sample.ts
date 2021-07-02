const { parentPort } = require("worker_threads");

parentPort.on("message", (data: any) => {
    parentPort.postMessage("OK, received and sent back " + data);
});