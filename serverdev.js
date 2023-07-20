const express = require("express");
const next = require("next");
const dotenv = require("dotenv");
const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const fs = require("fs");

dotenv.config();
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const errorHandler = require("./middleware/errorHandler");
const morgan = require("morgan");
const { createTableUser } = require("./database/auth");
const { createTableLogistics } = require("./database/logistics");
const { createTableSell } = require("./database/sell");
const { createTableContact } = require("./database/contact");
const { disableQueryCache } = require("./configdb/db");

app.prepare().then(() => {
  const server = express();

  //Create Table for User
  createTableUser();
  createTableLogistics();
  createTableSell();
  createTableContact();

  server.use(morgan("dev"));

  // Middleware to parse JSON request body
  server.use(express.json({ limit: "10mb" }));
  server.use("/logistic", require("./routes/logistics"));

  server.use("/sell", require("./routes/sell"));
  server.use("/user", require("./routes/auth"));
  server.use("/admin", require("./routes/admin"));
  server.use("/reach", require("./routes/contact"));

  //site map
  server.get("/sitemap.xml", (req, res) => {
    const filePath = path.join(__dirname, "sitemap.xml");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.status(404).end();
      } else {
        res.setHeader("Content-Type", "application/xml");
        res.send(data);
      }
    });
  });

  // error handling
  server.use(errorHandler);

  // Default route handler
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // Middleware to handle requests that don't match any route
  server.use(function (req, res) {
    res.status(404);

    // Render a custom error page
    res.json({
      title: "Page Not Found",
      message: "The requested page does not exist",
    });
  });

  // Error handler middleware
  server.use(function (err, req, res) {
    res.status(500);

    // render a custom error page
    res.json({
      title: "Server Error",
      message: "Something went wrong on our end",
    });
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
