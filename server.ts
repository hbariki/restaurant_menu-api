import express from "express";
import config from "config";
import router from './src/routes';

const app = express();
const port = config.get('port');
app.use(router);
app.listen(port, () => {
    console.log(`Server is listening on the port -> `, port);
});