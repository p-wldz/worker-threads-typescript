# worker-threads-typescript
Example of project with solution how to build parallel tasks in JavaScript using TypeScript

The solution is to compile on the fly the TS module: 

```javascript
require("ts-node").register({ transpileOnly: true });
require(path.resolve(__dirname, workerData.path));
```

