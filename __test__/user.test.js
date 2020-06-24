const supertest = require('supertest');
const app = require('../server');

describe("Testing the API", () => {
    it("tests our testing framework if it works", () => {
        expect(2).toBe(2);
    });
});