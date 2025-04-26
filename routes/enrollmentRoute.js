import express from 'express';
import {enrollClient} from '../controllers/enrollmentController.js';

const router = express.Router();

//Enrolls a client to a program
router.post('/', enrollClient);

export default router;