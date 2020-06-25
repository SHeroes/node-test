const supertest = require('supertest');
const app = require('../app');

describe("Testing the API", () => {

	/*
	let token;
	it("taking token auth", async () => {
		token = await supertest(app).post('/api/v1/login').set({username: 'Barnett',email:'barnettblankenship@quotezart.com'});
		console.log(token.body);
	});
	*/

    it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).get('/');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
	});

	it("tests the get user name endpoint and have message property", async () => {
		
		const response = await supertest(app).get('/api/v1/users/name/Barnett');

		expect(response.status).toBe(200);
		expect(response.body[0].name).toBe('Barnett');
		expect(response.body[0]).toHaveProperty('name');

	});

});