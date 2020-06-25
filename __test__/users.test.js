const supertest = require('supertest');
const app = require('../app');

describe("Testing the API users", () => {


    it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).get('/');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
	});

	it("tests the get user name endpoint and have message property", async () => {
		
		const response = await supertest(app).get('/api/v1/users/name/Barnett').set({Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmFybmV0dCIsImVtYWlsIjoiYmFybmV0dGJsYW5rZW5zaGlwQHF1b3RlemFydC5jb20iLCJyb2xlIjoidXNlciIsImlkIjoiYTNiOGQ0MjUtMmI2MC00YWQ3LWJlY2MtYmVkZjJlZjg2MGJkIiwiaWF0IjoxNTkzMDcwNTQxLCJleHAiOjE1OTMxNTY5NDF9.ycPwkwNgNJbGUX_pLyUtibwWl2GAyGYQu3Ve469SkMM'});

		expect(response.status).toBe(200);
		expect(response.body[0].name).toBe('Barnett');
		expect(response.body[0]).toHaveProperty('name');

	});

});