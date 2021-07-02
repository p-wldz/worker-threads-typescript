import { Worker } from "worker_threads";

const separateThread = new Worker(
    __dirname + "/threads/sample.js",
    {
      workerData: {
        value: 15,
        path: "./sample.ts"
      }
    }
  );
separateThread.postMessage("Test");

separateThread.on("message", result => {
    console.log("Received from thread ", result);
});