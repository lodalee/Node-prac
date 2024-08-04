import * as express from "express";
import { Cat, CatType } from "./app.model";
import { error } from "console";

const app: express.Express = express();

//*  logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

//* READ 전체 데이터 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* READ 특정 데이터 조회(단건 조회)
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* 404 middleware
app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on..");
});
