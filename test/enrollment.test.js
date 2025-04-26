
import * as chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../server.js';
import mongoose from 'mongoose';
import Client from '../models/Client.js';
import Program from '../models/Program.js';

// const expect = chai.expect;



chai.default.use(chaiHttp);


describe('Enrollment API', () => {
    let testClientId;
    let testProgramId;

    beforeEach(async () => {
        await Client.deleteMany();
        await Program.deleteMany();

        const program = new Program({
            programName: 'Test Program',
            description: 'Test program description'
        });
        const savedProgram = await program.save();
        testProgramId = savedProgram._id.toString();


        const client = new Client({
            clientName: 'Test Client',
            email: 'test@example.com',
            age: 25,
            gender: 'Male',
            phone: '1234567890'
        });
        const savedClient = await client.save();
        testClientId = savedClient._id.toString();
    });
});

after(async () => {
    mongoose.connection.close();
    
});

it('should enroll a client successfully', (done) => {
    chai.request(server)
        .post('/api/enrollment')
        .send({
            clientId: testClientId,
            programId: testProgramId
        })
        .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.have.property('_id');
            expect(res.body.enrolledPrograms).to.include(testProgramId);
        done();
        })
});