const supertest = require('supertest');

const app = require('../app');
const Project = require('../models/project');
const projectsData = require('../data/project.json');

beforeAll(() => {
    projectsData.map(async (project) => {
        project.test = true;
        await Project.create(project);
    });
});

afterAll(async () => {
    await Project.deleteMany({ test: true });
});

describe('GET /projects', () => {
    it('success response', async () => {
        const response = await supertest(app).get('/projects');

        expect(response.status).toBe(200);
        expect(response.body.data).toBeInstanceOf(Array);
        expect(response.body.data.length).toBeGreaterThan(0);
        expect(response.body.data[0]).toBeInstanceOf(Object);
        expect(response.body.data[0]).toHaveProperty('image', expect.any(String));
        expect(response.body.data[0]).toHaveProperty('name', expect.any(String));
        expect(response.body.data[0]).toHaveProperty('github', expect.any(String));
    });
});

describe('POST /projects', () => {
    it('success response', async () => {
        const payload = {
            image: 'test.png',
            name: 'test',
            github: 'test',
            test: true,
        };
        const response = await supertest(app).post('/projects').send(payload);

        expect(response.status).toBe(201);
        expect(response.body.data).toBeInstanceOf(Object);
        expect(response.body.data).toHaveProperty('image', expect.any(String));
        expect(response.body.data).toHaveProperty('image', payload.image);
        expect(response.body.data).toHaveProperty('name', expect.any(String));
        expect(response.body.data).toHaveProperty('name', payload.name);
        expect(response.body.data).toHaveProperty('github', expect.any(String));
        expect(response.body.data).toHaveProperty('github', payload.github);
    });

    it('validation error', async () => {
        const response = await supertest(app).post('/projects').send({
            image: '',
            name: 'JavaScript',
            github: 'frontend',
        });

        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('name', expect.any(String));
        expect(response.body).toHaveProperty('name', 'ValidationError');
        expect(response.body.errors.image).toHaveProperty('message', expect.any(String));
        expect(response.body.errors.image).toHaveProperty('message', 'Path `image` is required.');
    });
});

describe('DELETE /projects/:id', () => {
    it('success response', async () => {
        const { _id, name } = await Project.findOne({ test: true });
        const response = await supertest(app).delete(`/projects/${_id}`);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('message', expect.any(String));
        expect(response.body).toHaveProperty('message', `${name} deleted successfully`);
    });
});
