import rootRoute from "./src/routes/rootRoute";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const http = require("http");
const dotenv = require('dotenv');
// import {errorHandler} from "./src/utils/globalErrorHandler";
const app = express();
const server = http.createServer(app);

dotenv.config();

app.use(cookieParser());

// enabling CORS for any unknown origin
app.use(cors());

app.use(bodyParser.json());
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

//init route
rootRoute(app)

// Register error handler middleware last.
// app.use(errorHandler);

// set port, listen for requests
const PORT = parseInt(process.env.SERVER_PORT || '9000');
server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})