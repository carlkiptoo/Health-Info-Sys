import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
    programName: {type: String, required: true},
    description: String,
});

const Program = mongoose.model('Program', programSchema);

export default Program;