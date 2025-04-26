import Client from '../models/Client.js';

export const registerClient = async (req, res, next) => {
    try {
        const {clientName, email, age, gender, phone} = req.body;

        if (!clientName) {
            return res.status(400).json({message: 'Client name is required'});
        }

        const existingClient = await Client.findOne({email});
        if (existingClient) {
            return res.status(400).json({message: 'Client with this email already exists'});
        }

        const newClient = new Client({
            clientName,
            email,
            age,
            gender,
            phone
        });

        const savedClient = await newClient.save();

        res.status(201).json(savedClient);

    } catch (error) {
        console.log("Error creating client", error.message);
        res.status(500).json(error);
        next(error);
    }
}

export const searchClient = async (req, res, next) => {
    try {
        const {clientName, email} = req.query;

        if (!clientName && !email) {
            return res.status(400).json({message: 'Client name or email is required'});
        }

        const searchCriteria = {};

        if (clientName) {
            searchCriteria.clientName = {$regex: clientName, $options: 'i'};
        }

        if (email) {
            searchCriteria.email = {$regex: email, $options: 'i'};
        }

        console.log('Search Criteria:', searchCriteria);


        const clients = await Client.find(searchCriteria).populate('enrolledPrograms');

        res.status(200).json(clients);
    } catch (error) {
        console.log("Error searching clients", error.message);
        res.status(500).json(error);
        next(error);
    }
}

export const getClientProfile = async (req, res, next) => {
    try {
        const {clientId} = req.params;

        const client = await Client.findById(clientId).populate('enrolledPrograms');

        if (!client) {
            return res.status(404).json({message: 'Client not found'});
        }

        res.status(200).json(client);
    } catch (error) {
        console.log("Error getting client profile", error.message);
        res.status(500).json(error);
        next(error);
    }
}