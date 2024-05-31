const express= require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

console.log("server starting...");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:300"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
); 

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json())

const PORT = process.removeAllListeners.APP_PORT || 3001;

app.use("/api", routes);

app.listen(PORT, ()=>{console.log(`server is listening on ${PORT}`)});
