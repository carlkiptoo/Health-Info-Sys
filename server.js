import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import programRoutes from './routes/programRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import enrollmentRoutes from './routes/enrollmentRoute.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to MongoDB')).catch((err) => console.log(err));

app.use('/api/program', programRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/enrollment', enrollmentRoutes);
app.use((err,req, res, next) => {
    console.error('Unhandled error', err.message);
    res.status(500).json({message: 'Internal server error', error: err.message});

});

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
