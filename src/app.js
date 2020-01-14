import express from "express";
import HomeRouter from "./routes/home";

const App = express();

App.get("/", HomeRouter);

App.listen(1337);
console.log("listening on port 1337....");

export default App;
