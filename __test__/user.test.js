const supertest = require('supertest');
const app = require('../app');

describe("Testing the API", () => {
    it("tests our testing framework if it works", () => {
        expect(2).toBe(2);
    });
});