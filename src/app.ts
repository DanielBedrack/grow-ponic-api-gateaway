import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import rootRouter from './routes/index.routes';

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    dotenv.config();
    this.app = express();
    this.setting();
    this.routes();
    this.errors();
  }

  setting() {
    this.app.set('port', this.port || process.env.PORT || 5000);
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  routes() {
    this.app.use('/api/v1', rootRouter);
  }

  errors() {
    this.app.use(
      (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.status(500).json({ message: err.message });
      }
    );
  }

  async listen() {
    //this.connection();
    this.app.listen(this.app.get('port'));
    console.log('API Gateway Server is running on PORT :', this.app.get('port'));
  }
}
// import express from 'express';
// import httpProxy from 'http-proxy';

// const app = express();
// const proxy = httpProxy.createProxyServer();

// // Define routes to forward requests to microservices
// app.use('/service1', (req, res) => {
//   proxy.web(req, res, { target: 'http://localhost:3001' }); // Change to your microservice's port
// });

// app.use('/service2', (req, res) => {
//   proxy.web(req, res, { target: 'http://localhost:3002' }); // Change to your microservice's port
// });

// app.use('/service3', (req, res) => {
//   proxy.web(req, res, { target: 'http://localhost:3003' }); // Change to your microservice's port
// });

// app.use('/service4', (req, res) => {
//   proxy.web(req, res, { target: 'http://localhost:3004' }); // Change to your microservice's port
// });

// // Start the gateway on port 4000
// app.listen(4000, () => {
//   console.log('API Gateway is listening on port 4000');
// });
