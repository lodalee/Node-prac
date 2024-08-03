import * as express from "express";

const app: express.Express = express();

const port: number = 8000;
const name: string = "채원";

app.get("/", (req, res) => {
  res.send(${name});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
