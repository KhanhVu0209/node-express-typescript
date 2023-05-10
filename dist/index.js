"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// @ts-ignore
const cors_1 = __importDefault(require("cors"));
// @ts-ignore
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const globalErrorHandler_1 = require("./src/utils/globalErrorHandler");
const rootRoute_1 = __importDefault(require("./src/routes/rootRoute"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
dotenv_1.default.config();
app.use((0, cookie_parser_1.default)());
// enabling CORS for any unknown origin
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// parse requests of content-type - application/json
app.use(express_1.default.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
//init route
(0, rootRoute_1.default)(app);
// Register error handler middleware last.
app.use(globalErrorHandler_1.errorHandler);
// set port, listen for requests
const PORT = parseInt(process.env.SERVER_PORT);
server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
