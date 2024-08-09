//** Create Read */

import * as express from "express";
import catsRouter from './cats/cats.route'

const app: express.Express = express();

//*  logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

//* json middleware
app.use(express.json());
app.use(catsRouter);

//* READ 고양이 전체 데이터 조회
app.get('/cats', (req, res) =>{
  try{
    const cats = Cat
    // throw new Error("db connect error")
    res.status(200).send({
      success: true,
      data: {
        cats,
      }
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* READ 고양이 특정 데이터 조회
app.get('/cat/:id', (req, res) =>{
  try{
    const params = req.params;
    const cat = Cat.find((cat)=> {
      return cat.id === params.id;
    });
    // throw new Error("db connect error")
    res.status(200).send({
      success: true,
      data: {
        cat,
      }
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* CREATE 새로운 고양이 추가api
app.post('/cats', (req, res)=>{
  try{
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: {data}
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
})


//* 404 middleware
app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on..");
});
