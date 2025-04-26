import Program from '../models/Program.js';

export const createProgram = async (req, res, next) => {
    try{
        const {programName, description} = req.body;

        if (!programName) {
            return res.status(400).json({message: 'Program name is required'});
        }

        const existingProgram = await Program.findOne({programName});
        if (existingProgram) {
            return res.status(400).json({message: 'Program already exists'});
        }


        const newProgram = new Program({
            programName,
            description
        });

        const savedProgram = await newProgram.save();

        res.status(201).json(savedProgram);
    } catch (error) {
        console.log("Error creating program", error.message);
        res.status(500).json(error);
        next(error);
    }
}