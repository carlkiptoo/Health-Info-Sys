import Client from '../models/Client.js';
import Program from '../models/Program.js';
import mongoose from 'mongoose';

export const enrollClient = async (req, res, next) => {
    try {
        const {clientId, programId} = req.body;

        if (!clientId) {
            return res.status(400).json({message: 'Client id is required'});
        }
        if (!programId) {
            return res.status(400).json({message: 'Program id is required'});
        }

        const client = await Client.findById(clientId);
        if (!client) {
            return res.status(404).json({message: 'Client not found'});
        }

        const objectIds = programId.map(id => new mongoose.Types.ObjectId(id));

        const existingPrograms = await Program.find({_id: {$in: objectIds}});
        const existingProgramIds = existingPrograms.map(program => program._id.toString());

        const missingPrograms = objectIds.filter(id => !existingProgramIds.includes(id.toString()));

        if (missingPrograms.length > 0) {
            return res.status(404).json({
                message: 'Program not found',
                missingProgramIdds: missingPrograms
            })
        }

        const programIdArray = Array.isArray(programId) ? programId : [programId];

        client.enrolledPrograms.push(...programIdArray);

        client.enrolledPrograms = [...new Set(client.enrolledPrograms.map(id => id.toString()))];

        const savedClient = await client.save();

        res.status(201).json(savedClient);
    } catch (error) {
        console.log("Error enrolling client", error.message);
        res.status(500).json(error);
        next(error);
    }
}