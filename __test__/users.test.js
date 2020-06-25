const supertest = require('supertest');
const app = require('../app');


const authTokenAdmin = {Authorization: `Bearer ${process.env.AUTH_TOKEN_ADMIN}`};
const authTokenUser = {Authorization: `Bearer ${process.env.AUTH_TOKEN_USER}`};


describe("Testing the API users", () => {


    it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).get('/');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
	});

	it("tests the get user name endpoint and have message property", async () => {
		
		const response = await supertest(app).get('/api/v1/users/name/Barnett').set(authTokenUser);

		expect(response.status).toBe(200);
		expect(response.body[0].name).toBe('Barnett');
		expect(response.body[0]).toHaveProperty('name');

	});

});