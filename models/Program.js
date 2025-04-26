import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
    programName: {type: String, required: true},
    description: String,
});

const Program = mongoose.model('program', programSchema);

export default Program;