import express from 'express';
import {createProgram} from '../controllers/programController.js';


const router = express.Router();

//This creates a new program
router.post('/', createProgram);

export default router;
