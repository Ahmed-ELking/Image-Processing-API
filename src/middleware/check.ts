// import express
import express from 'express';

// function that checks user inputs to use as a middleware in images route
const checkInputs = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  //check the name is exist
  if (!req.query.name) {
    return res.status(400).send({ error: 'Image name is missing' });
  }

  //check the width is exist and then if it's a number
  if (Number(req.query.width) <= 0 || !Number(req.query.width)) {
    return res
      .status(400)
      .send({ error: 'Enter width as a number and greater than zero' });
  }

  //check the height is exist and then if it's a number
  if (Number(req.query.height) <= 0 || !Number(req.query.height)) {
    return res
      .status(400)
      .send({ error: 'Enter height as a number and greater than zero' });
  }
  next();
};

//export check inputs middleware function
export default checkInputs;
