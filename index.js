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
    res.status(201).json(await db("resources"));
  } catch (err) {
    next(err);
  }
});

server.post("/api/resources", async (req, res, next) => {
  try {
    const [id] = await db("resources").insert(req.body);

    const resource = await db("resources")
      .where({ id })
      .first();

    res.status(201).json(resource);
  } catch (err) {
    next(err);
  }
});

server.get("/api/projects", async (req, res, next) => {
  try {
    res.status(200).json(await db("projects"));
  } catch (err) {
    next(err);
  }
});

server.post("/api/projects", async (req, res, next) => {
  try {
    const [id] = await db("projects").insert(req.body);

    const project = await db("projects")
      .where({ id })
      .first();

    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

server.get("/api/tasks", async (req, res, next) => {
  try {
    const tasks = await db("tasks as t")
      .leftJoin("projects as p", "p.id", "t.project_id")
      .select(
        "t.id",
        "t.description as tasks_description",
        "p.name as project_name",
        "p.description as project_description"
      );

    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

server.post("/api/tasks", async (req, res, next) => {
  try {
    const [id] = await db("tasks").insert(req.body);

    const task = await db("tasks")
      .where({ id })
      .first();

    res.status(201).json(task);
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
