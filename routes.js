import express from "express";

const app = express();

app.get("/api", (_, res) => res.send("API Up And Running!"));

app.get("/testing", (req_, res) => res.send("Testing"));

app.get("/about", (req, res) => res.send("About page"));

app.get("/", (_, res) => res.send("Hello World!"));

export default app;
