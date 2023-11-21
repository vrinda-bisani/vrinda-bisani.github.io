const request = require('supertest');
const app = require('./app');
// const model = require('./model/message');

describe('Index router', () => {
    it('should get the home page', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain("intro");
        expect(response.text).toContain("Education");
        expect(response.text).toContain("Skills");
    });
});

describe('Projects router', () => {
    it('should get the projects page', async () => {
        const response = await request(app).get('/projects');
        expect(response.status).toBe(200);
        expect(response.text).toContain("Budgeting App");
    });
});

describe('experience router', () => {
    it('should get the projects page', async () => {
        const response = await request(app).get('/experience');
        expect(response.status).toBe(200);
        expect(response.text).toContain("IBM");
        expect(response.text).toContain("Bank of America");
    });
});

describe('connect', () => {
    it('should get the projects page', async () => {
        const response = await request(app).get('/connect');
        expect(response.status).toBe(200);
        expect(response.text).toContain("form");
    });
});

describe('Store Message', () => {
    it('should store message', async () => {
        // const saveMock = jest.fn();
        // model.prototype.save = saveMock;
        const response = await request(app).post('/sendMessage').send({});
        expect(response.status).toBe(200);  
    });
});


