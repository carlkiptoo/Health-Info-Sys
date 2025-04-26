import express from 'express';
import {enrollClient} from '../controllers/enrollmentController.js';
import {enrollmentValidator} from '../validators/enrollmentValidator.js';
import {validateRequest} from '../middleware/validateRequest.js';


const router = express.Router();

//Enrolls a client to a program
router.post('/', enrollmentValidator, validateRequest, enrollClient);

export default router;