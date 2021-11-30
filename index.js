const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use("/", routes);

app.listen("6780", () => console.log("Sever running on port 6780"));
