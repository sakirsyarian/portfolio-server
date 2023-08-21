const supertest = require('supertest');

const app = require('../app');
const Testimonial = require('../models/testimonial');
const testimonialsData = require('../data/testimonial.json');

beforeAll(() => {
    testimonialsData.map(async (testimonial) => {
        testimonial.test = true;
        await Testimonial.create(testimonial);
    });
});

afterAll(async () => {
    await Testimonial.deleteMany({ test: true });
});

describe('GET /testimonials', () => {
    it('success response', async () => {
        const response = await supertest(app).get('/testimonials');

        expect(response.status).toBe(200);
        expect(response.body.data).toBeInstanceOf(Array);
        expect(response.body.data.length).toBeGreaterThan(0);
        expect(response.body.data[0]).toBeInstanceOf(Object);
        expect(response.body.data[0]).toHaveProperty('image', expect.any(String));
        expect(response.body.data[0]).toHaveProperty('name', expect.any(String));
        expect(response.body.data[0]).toHaveProperty('message', expect.any(String));
    });
});

describe('POST /testimonials', () => {
    it('success response', async () => {
        const payload = {
            image: 'test.png',
            name: 'test',
            message: 'test',
            test: true,
        };
        const response = await supertest(app).post('/testimonials').send(payload);

        expect(response.status).toBe(201);
        expect(response.body.data).toBeInstanceOf(Object);
        expect(response.body.data).toHaveProperty('image', expect.any(String));
        expect(response.body.data).toHaveProperty('image', payload.image);
        expect(response.body.data).toHaveProperty('name', expect.any(String));
        expect(response.body.data).toHaveProperty('name', payload.name);
        expect(response.body.data).toHaveProperty('message', expect.any(String));
        expect(response.body.data).toHaveProperty('message', payload.message);
    });

    it('validation error', async () => {
        const response = await supertest(app).post('/testimonials').send({
            image: 'test',
            name: '',
            message: 'test',
        });

        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('name', expect.any(String));
        expect(response.body).toHaveProperty('name', 'ValidationError');
        expect(response.body.errors.name).toHaveProperty('message', expect.any(String));
        expect(response.body.errors.name).toHaveProperty('message', 'Path `name` is required.');
    });
});

describe('DELETE /testimonials/:id', () => {
    it('success response', async () => {
        const { _id, name } = await Testimonial.findOne({ test: true });
        const response = await supertest(app).delete(`/testimonials/${_id}`);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('message', expect.any(String));
        expect(response.body).toHaveProperty('message', `${name} deleted successfully`);
    });
});
