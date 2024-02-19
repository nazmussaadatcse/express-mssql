// const sql = require('mssql');
import sql from 'mssql'
import apiRouter from './src/routes/index.route.js';
import dotenv from 'dotenv'
import express from 'express';
import db from './src/config/db.js'
const app = express();
dotenv.config()
app.use(express.json())

import cors from 'cors';
app.use(cors({ origin: '*' }));


// const config = {
//     database: process.env.MSSQL_DATABASE,
//     server: process.env.MSSQL_SERVER,
//     user: process.env.MSSQL_USERNAME,
//     password: process.env.MSSQL_PASSWORD,
//     options: {
//       trustedConnection: true,
//     }
//   }
const checkDatabaseConnection = async () => {
    try {
        // Authenticate with the database
        await db.sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// checkDatabaseConnection()


const connectToDatabase = async () => {
    try {
        await sql.connect(config);
        console.log("MSSQL DB Connected");
    } catch (error) {
        console.error("Error connecting to MSSQL database:", error.message);
    }
};


// app.get('/data', async (req, res) => {
//     // await connectToDatabase();

//     try {
//         const result = await sql.query('SELECT * FROM table_name');
//         res.send(result.recordset);
//     } catch (error) {
//         console.error("Error executing query:", error.message);
//         res.status(500).send("Internal Server Error");
//     }
// });


app.use(apiRouter);
app.listen(3000, () => {
    console.log('Server is running ');
    // connectToDatabase()
});