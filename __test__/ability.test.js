const supertest = require('supertest');

const app = require('../app');
const Ability = require('../models/ability');
const abilitiesData = require('../data/ability.json');

beforeAll(() => {
    abilitiesData.map(async (ability) => {
        ability.test = true;
        await Ability.create(ability);
    });
});

afterAll(async () => {
    await Ability.deleteMany({ test: true });
});

describe('GET /abilities', () => {
    it('success response', async () => {
        const response = await supertest(app).get('/abilities');

        expect(response.status).toBe(200);
        expect(response.body.data).toBeInstanceOf(Array);
        expect(response.body.data.length).toBeGreaterThan(0);
        expect(response.body.data[0]).toBeInstanceOf(Object);
        expect(response.body.data[0]).toHaveProperty('icon', expect.any(String));
        expect(response.body.data[0]).toHaveProperty('name', expect.any(String));
        expect(response.body.data[0]).toHaveProperty('category', expect.any(String));
    });
});

describe('POST /abilities', () => {
    it('success response', async () => {
        const payload = {
            icon: 'test.png',
            name: 'test',
            category: 'frontend',
            test: true,
        };
        const response = await supertest(app).post('/abilities').send(payload);

        expect(response.status).toBe(201);
        expect(response.body.data).toBeInstanceOf(Object);
        expect(response.body.data).toHaveProperty('icon', expect.any(String));
        expect(response.body.data).toHaveProperty('icon', payload.icon);
        expect(response.body.data).toHaveProperty('name', expect.any(String));
        expect(response.body.data).toHaveProperty('name', payload.name);
    });

    it('validation error', async () => {
        const response = await supertest(app).post('/abilities').send({
            icon: '',
            name: 'JavaScript',
            category: 'frontend',
        });

        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('name', expect.any(String));
        expect(response.body).toHaveProperty('name', 'ValidationError');
        expect(response.body.errors.icon).toHaveProperty('message', expect.any(String));
        expect(response.body.errors.icon).toHaveProperty('message', 'Path `icon` is required.');
    });
});

describe('DELETE /abilities/:id', () => {
    it('success response', async () => {
        const ability = await supertest(app).get('/abilities');
        const { _id, name } = ability.body.data[0];
        const response = await supertest(app).delete(`/abilities/${_id}`);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('message', expect.any(String));
        expect(response.body).toHaveProperty('message', `${name} deleted successfully`);
    });
});
