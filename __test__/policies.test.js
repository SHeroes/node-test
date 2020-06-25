const supertest = require('supertest');
const app = require('../app');

describe("Testing the API policies", () => {


    it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).get('/');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
	});

	
	it("tests the get user name endpoint and have message property", async () => {
	
		// Token must be Admin role to this endpoint
		const response = await supertest(app).get('/api/v1/policies/client/Barnett').set({Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQnJpdG5leSIsImVtYWlsIjoiYnJpdG5leWJsYW5rZW5zaGlwQHF1b3RlemFydC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsImlhdCI6MTU5MzA3MTcxOCwiZXhwIjoxNTkzMTU4MTE4fQ.tQqCz0Gc7RQ1gKKQdmaRkFlyKTRJuWDz5o1v5_k4pog'});

		expect(response.status).toBe(200);
		expect(response.body[0]).toHaveProperty('clientId');
		expect(response.body[0]).toHaveProperty('email');
		expect(response.body[0].email).toBe('inesblankenship@quotezart.com');
		

	});

});