import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import programRoutes from './routes/programRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB')).catch((err) => console.log(err));

app.use('/api/program', programRoutes);

// app.use((err,req, res, next) => {
//     console.error('Unhandled error', err.message);
//     res.status(500).json({message: 'Internal server error', error: err.message});

// });

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
