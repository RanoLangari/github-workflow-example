import express from "express";
import Routes from "./routes.js";
const app = express();
const port = 5000;

app.use(Routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
