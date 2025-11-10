import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectToDatabase from './server/db/db.js';
import errorHandler from './server/middleware/errorHandler.js';
import { enquiryRoutes, contactRoutes, countRoutes } from './server/routes/index.js';

dotenv.config();
connectToDatabase();

const app = express();

app.use(cors({
    origin: '*',  // You can also specify specific domains here like 'http://localhost:3000'
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(errorHandler);
app.use(bodyParser.json());
app.use(express.json());
app.use("/course-enquiry", enquiryRoutes);
app.use("/contactus", contactRoutes);
app.use("/count", countRoutes);

app.get('/', (req, res) => {
    res.send('Saurav portfolio is ready to serve you!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`saurav-portfolio Server is running on http://localhost:${ PORT }`);
});
