const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const config = require("./config");

const limiter = rateLimit({
  limit: 100,
  windowMs: 100 * 60 * 1000,
  message: "Too many request from this IP",
  legacyHeaders: false,
});

const app = express();

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(limiter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const startServer = () => {
  try {
    app.listen(config.PORT, () => {
      console.log(`app started on ${config.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
