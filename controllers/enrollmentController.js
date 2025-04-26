import Client from '../models/Client.js';
import Program from '../models/Program.js';

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

        const programs = await Program.findById({_id: {$in: programId}});
        if (programs.length !== programId.length) {
            return res.status(404).json({message: 'Program not found'});
        }

        client.enrolledPrograms.push(...programs);

        client.enrolledPrograms = [...new Set(client.enrolledPrograms.map(id => id.toString()))];

        const savedClient = await client.save();

        res.status(201).json(savedClient);
    } catch (error) {
        console.log("Error enrolling client", error.message);
        res.status(500).json(error);
        next(error);
    }
}