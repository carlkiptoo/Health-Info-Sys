import Program from '../models/Program.js';

export const createProgram = async (req, res) => {
    try{
        const {programName, description} = req.body;

        const newProgram = ({
            programName,
            description
        });

        await newProgram.save();

        res.status(201).json(newProgram);
    } catch (error) {
        res.status(500).json(error);
    }
}