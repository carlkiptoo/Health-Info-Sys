import express from 'express';
import {registerClient, searchClient} from '../controllers/clientController.js';

const router = express.Router();

//This creates a new client
router.post('/', registerClient);

//Searches for clients
router.get('/search', searchClient);

router.get('/', async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
  });
  

export default router;