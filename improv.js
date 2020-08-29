import express from "express";
import middleware from "./middleware";
const winston = require("./config/winston");
var expressStaticGzip = require("express-static-gzip");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use("/public", express.static("public"));
app.use("/dist", expressStaticGzip("dist"));

app.use(middleware);

winston.info(`listening on ${PORT}`);
const server = app.listen(PORT);

process.on('SIGINT', () => {
    winston.info("Graceful Shutdown");
    server.close((err) => {
        if (err) {
            winston.error(err);
            process.exit(1);
        }

        winston.info("Success");
        process.exit(0);
    })
})

process.on('unhandledRejection', err => {
    winston.error(`${err.status} - ${err.message} .... ${err} unhandled rejection!`);
    server.close((err) => {
        winston.info("Closing connections..");
        if (err) {
            winston.error(err);
            process.exit(1);
        }
    })
    winston.error(`unhandled rejection! ${err.message} ${err} shutting down`);

    process.exit(1);
})