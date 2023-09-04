const supertest = require('supertest');

const app = require('../app');
const Experience = require('../models/experience');
const experiencesData = require('../data/experience.json');

beforeAll(() => {
    experiencesData.map(async (experience) => {
        experience.test = true;
        await Experience.create(experience);
    });
});

afterAll(async () => {
    await Experience.deleteMany({ test: true });
});

describe('GET /experiences', () => {
    it('success response', async () => {
        const response = await supertest(app).get('/experiences');

        expect(response.status).toBe(200);
        expect(response.body.data).toBeInstanceOf(Array);
        expect(response.body.data.length).toBeGreaterThan(0);
        expect(response.body.data[0]).toBeInstanceOf(Object);
        expect(response.body.data[0]).toHaveProperty('company', expect.any(String));
        expect(response.body.data[0]).toHaveProperty('position', expect.any(String));
        expect(response.body.data[0]).toHaveProperty('date', expect.any(String));
        expect(response.body.data[0]).toHaveProperty('description', expect.any(Array));
    });
});

describe('POST /experiences', () => {
    it('success response', async () => {
        const payload = {
            company: 'test',
            position: 'test',
            date: 'test',
            description: ['test'],
            test: true,
        };
        const response = await supertest(app).post('/experiences').send(payload);

        expect(response.status).toBe(201);
        expect(response.body.data).toBeInstanceOf(Object);
        expect(response.body.data).toHaveProperty('company', expect.any(String));
        expect(response.body.data).toHaveProperty('company', payload.company);
        expect(response.body.data).toHaveProperty('position', expect.any(String));
        expect(response.body.data).toHaveProperty('position', payload.position);
        expect(response.body.data).toHaveProperty('date', expect.any(String));
        expect(response.body.data).toHaveProperty('date', payload.date);
    });

    it('validation error', async () => {
        const response = await supertest(app)
            .post('/experiences')
            .send({
                company: '',
                position: 'Freelance',
                date: 'Aug 2020 - Present',
                description: ['test'],
            });

        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('name', expect.any(String));
        expect(response.body).toHaveProperty('name', 'ValidationError');
        expect(response.body.errors.company).toHaveProperty('message', expect.any(String));
        expect(response.body.errors.company).toHaveProperty('message', 'Path `company` is required.');
    });
});

describe('DELETE /experiences/:id', () => {
    it('success response', async () => {
        const { _id, company } = await Experience.findOne({ test: true });
        const response = await supertest(app).delete(`/experiences/${_id}`);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('message', expect.any(String));
        expect(response.body).toHaveProperty('message', `${company} deleted successfully`);
    });
});
