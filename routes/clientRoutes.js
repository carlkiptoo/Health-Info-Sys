import express from 'express';
import {registerClient, searchClient, getClientProfile} from '../controllers/clientController.js';
import {apiKeyAuth} from '../middleware/authMiddleware.js';

const router = express.Router();

//This creates a new client
router.post('/',registerClient);

//Searches for clients
router.get('/search', apiKeyAuth, searchClient);

//Gets a client's profile
router.get('/:clientId', apiKeyAuth, getClientProfile);
  

export default router;