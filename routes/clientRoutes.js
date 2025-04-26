import express from 'express';
import {registerClient, searchClient, getClientProfile} from '../controllers/clientController.js';

const router = express.Router();

//This creates a new client
router.post('/', registerClient);

//Searches for clients
router.get('/search', searchClient);

//Gets a client's profile
router.get('/:clientId', getClientProfile);
  

export default router;