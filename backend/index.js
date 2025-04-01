require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db.config');
const models = require('./models/models');
const cors = require('cors');
const fileupload = require('express-fileupload');   
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const path = require('path');

const PORT = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(fileupload({}));
app.use('/api', router);
app.use(errorHandler);
const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} `);
        });
        app.listen()
    }catch(error){
        console.log(error);
    }
}

start();