import * as express from "express";
import { Cat, CatType } from "./app.model";
import { error } from "console";

const app: express.Express = express();

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
});

app.get("/cats/a", (req, res) => {
  res.send({ a: Cat[0] });
});

app.get("/cats/d", (req, res) => {
  res.send({ d: Cat[3] });
});

app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on..");
});
