import http from 'http';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { startCron } from './service';
import cors from 'cors';

var indexRouter = require('./routes/index');

var app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT);
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/weather', indexRouter);

server.listen(app.get('port'), () => {
    console.log(`Project is running on port ${app.get('port')}`);
    console.log(`In ${process.env.NODE_ENV} environment`)
    /* Запуск Cron */
    startCron();
});

module.exports = app;
