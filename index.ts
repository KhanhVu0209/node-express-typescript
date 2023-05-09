
import express, {Request, Response, Express} from "express";
import bodyParser from "body-parser";
// @ts-ignore
import cors from 'cors';
// @ts-ignore
import cookieParser from "cookie-parser";
import http from "http";
import dotenv from 'dotenv';

const app: Express = express();
const server: http.Server = http.createServer(app);

dotenv.config();

app.use(cookieParser());

// enabling CORS for any unknown origin
app.use(cors());

app.use(bodyParser.json());
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//init route
// require("./src/routes/root.routes")(app);
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

// set port, listen for requests
const PORT: number = parseInt(process.env.SERVER_PORT!);
server.listen(PORT, () =>{
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})