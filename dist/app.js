"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/dataRoute/index.routes"));
const index_routes_2 = __importDefault(require("./routes/tracking-routes/index.routes"));
const index_routes_3 = __importDefault(require("./routes/notifications-routes/index.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor(port) {
        this.port = port;
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.setting();
        this.middlewares();
        this.routes();
        this.errors();
        // this.app.get('/dataapi', (req, res, next) => {
        //   res.send('Hello from Data Api');
        // });
    }
    setting() {
        this.app.set('port', this.port || process.env.PORT || 5000);
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
    }
    middlewares() {
        //this.app.use(morgan('dev'));
    }
    routes() {
        //this.app.use('/', allRouter)
        this.app.use('/api/v1/data', index_routes_1.default);
        this.app.use('/api/v1/tracking', index_routes_2.default);
        this.app.use('/api/v1/notification', index_routes_3.default);
    }
    errors() {
        this.app.use((err, req, res, next) => {
            res.status(500).json({ message: err.message });
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            //this.connection();
            this.app.listen(this.app.get('port'));
            console.log('API Gateway is running on port ', this.app.get('port'));
        });
    }
}
exports.App = App;
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
