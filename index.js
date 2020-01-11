const express = require("express");
const helmet = require("helmet");
const db = require("./data/db-config");

const server = express();
const port = process.env.PORT || 4040;

server.use(helmet());
server.use(express.json());

// routes
server.get("/api/resources", async (req, res, next) => {
  try {
    res.json(await db("resources"));
  } catch (err) {
    next(err);
  }
});
//

server.use((err, req, res, next) => {
  console.log("error:", err);

  res.status(500).json({
    message: "something went wrong"
  });
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
