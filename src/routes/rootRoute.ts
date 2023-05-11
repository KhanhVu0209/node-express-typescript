import {Express} from 'express';

const unitRoutes = require('./unitRoute');

const rootRoute = (app: Express): void => {
    app.use("/api/v1", unitRoutes);
};

export default rootRoute;
