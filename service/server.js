var exec = require("child_process").exec;
var express = require("express");
var app = express();
var http = require("http").Server(app);
const { promisify } = require("util");
const { v4: uuidv4 } = require("uuid");
var https = require("https");
var axios = require("axios");
var JWTR = require("jwt-redis").default;
var fileupload = require("express-fileupload");
var cors = require('cors');

const SOCKET_PORT = 3000;
const SECRET_MANAGER = 'test';

class Server {

  constructor() {
    app.use(express.json({ limit: "50mb" }));
    app.use(express.urlencoded({ limit: "50mb" }));
    app.use(this.clientErrorHandler);
    app.use(fileupload());
    app.use(cors())

    app.use((req, res, next) => {
      req.headers.origin = req.headers.origin || req.headers.host;
      const origin = req.headers.origin;
      try {
        if (origin.length > 0) {
          res.setHeader("Access-Control-Allow-Origin", origin);
        }
      } catch (err) {}

      res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.header("Access-Control-Allow-Credentials", true);
      return next();
    });

    this.app = app;

    var io = require("socket.io")(http, {
      cors: {
        origin: function (origin, callback) {
          return callback(null, true);
        },
        methods: ["GET", "POST"],
        transports: ["websocket"], //'polling'
        allowedHeaders: ["Access-Control-Allow-Origin", "Authorization", "withCredentials"],
        credentials: true,
        allowEIO3: true,
      },
      maxHttpBufferSize: 1e8,
    });

    // this.socketioRedis = require("socket.io-redis");
    // io.adapter(this.socketioRedis({ host: this.redisHost, port: this.redisPort }));

    // this.redis = require("redis");
    // this.rediscli = this.redis.createClient({ url: 'redis://127.0.0.1:6379' });
    // this.redisHgetAll = promisify(this.rediscli.hgetall).bind(this.rediscli);
    // this.redisGet = promisify(this.rediscli.get).bind(this.rediscli);
    // this.redisSetEx = promisify(this.rediscli.setex).bind(this.rediscli);
    // this.redisDel = promisify(this.rediscli.del).bind(this.rediscli);

    // this.jwtr = new JWTR(this.rediscli);
    // this.fs = require("fs");
    // this.uuidv4 = uuidv4;
    // this.path = require("path");

    // this.rediscli2 = this.rediscli.duplicate();
    // this.rediscli2.subscribe(SECRET_MANAGER, (p) => {
    //   console.log(`SUBSCRIPTION: ${SECRET_MANAGER}`, p);
    // });
    // this.rediscli2.on("message", async (channel, data) => {
    //     console.log(`SUBSCRIPTION: ${channel}`, data);
    //     //exec("kill $(lsof -i tcp:3000 | tail -1 | awk '{print $2}')");
    // });

    http.listen(SOCKET_PORT, () => {
      console.log("Server running on port " + SOCKET_PORT);
    });
  }

  apiResponse = async (res, status, message, data = []) => {
    let response = { status: status, message: message, data };
    res.status(200).json(response);
  };

  clientErrorHandler = (err, req, res, next) => {
    if (req.xhr) {
      res.status(500).send({ error: "Something failed!" });
    } else {
      next(err);
    }
  };

  stringToBase64 = (str) => {
    return Buffer.from(str).toString("base64");
  };

  base64ToString = (base64) => {
    return Buffer.from(base64, "base64").toString("ascii");
  };

}

process.on("uncaughtException", function (err) {
  console.log("Caught exception: ", err);
});

var server = null;
const startServer = async () => {
  server = new Server();
  require("./api.js")(server);
};

startServer();
