import express from 'express';
import http from 'http';
import path from 'path';
import routes from './routes';
import { initWsServer } from './services/socket';
import { endpoints } from './middlewares/endpoints';
import { mySqlDbService } from './services/mysqldb';
import { sqlLiteDbService } from './services/sqlite';

const app: express.Application = express();
const PORT = process.env.PORT || 8080;
const server: http.Server = http.createServer(app);initWsServer(server);

server.listen(PORT, () => { console.log(`Servidor Up! en puerto: ${PORT}`);});

mySqlDbService.init();
sqlLiteDbService.init();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
app.use(endpoints);