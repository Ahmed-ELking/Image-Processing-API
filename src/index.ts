// Require Express to run server and routes
import express from 'express';

import routes from './routes/routes';

// import morgan logger to use as a middleware
import morgan from 'morgan';

// Start up an instance of app
const app = express();

//using morgan module as a logger middleware
app.use(morgan('common'));

// Setup Server and routes
const port = 5000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello! How are you?');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`sever start at http://localhost:${port}`);
});

// export app to testing
export default app;
