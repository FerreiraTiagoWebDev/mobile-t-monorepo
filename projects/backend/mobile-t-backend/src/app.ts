import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { MongoClient } from 'mongodb';
import morgan from 'morgan';
import config from './config';
import errorHandler from './middleware/errorHandler';
import fourOhFour from './middleware/fourOhFour';
import root from './routes/root';

const app = express();

// Connect to the MongoDB database
MongoClient.connect(config.mongoUri)
  .then((client) => {
    console.log('Connected to MongoDB');

    // Access the database
    const db = client.db(config.mongoDBName);

    // Set the database instance on the app object
    app.locals.db = db;
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Terminate the app if the connection fails
  });

// Apply most middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    //@ts-ignore
  origin: config.clientOrigins[config.nodeEnv],
}));
app.use(helmet());
app.use(morgan('tiny'));

// Apply routes before error handling
app.use('/', root);

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;