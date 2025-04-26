import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    clientName: {type: String, required: true},
    email: {type: String, required: true},
    age: Number,
    gender: String,
    phone: String,
    enrolledPrograms: [{type: mongoose.Schema.Types.ObjectId, ref: 'program'}],
});

const Client = mongoose.model('client', clientSchema);

export default Client;