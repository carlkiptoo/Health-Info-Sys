import express from 'express';
import {registerClient} from '../controllers/clientController.js';

const router = express.Router();

//This creates a new client
router.post('/', registerClient);

export default router;