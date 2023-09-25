import express from "express";
import config from "config";
import Routers  from './src/server/initializers/routes';


const app = express();

const port = config.get('port');

app.use('/api', Routers);

app.listen(port, () => {
    console.log(`Server is listening on the port -> `, port);
});