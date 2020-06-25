const supertest = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');

const authTokenAdmin = {Authorization: `Bearer ${process.env.AUTH_TOKEN_ADMIN}`};
const authTokenUser = {Authorization: `Bearer ${process.env.AUTH_TOKEN_USER}`};


describe("Testing the API policies", () => {

	it("tests the get policies linked to a client Manning", async () => {
	
		// Token must be Admin role to this endpoint
		const response = await supertest(app).get('/api/v1/policies/users/name/Manning').set(authTokenAdmin);

		expect(response.status).toBe(200);
		
		expect(response.body[0]).toHaveProperty('clientId');
		expect(response.body[0]).toHaveProperty('email');
		expect(response.body[0].email).toEqual('inesblankenship@quotezart.com');
		
	});


	// POST http://localhost:3000/api/v1/policies/id/64cceef9-3a01-49ae-a23b-3761b604800b
	it("tests POST url to link idPolicy in Session", async () => {
	
		// Token must be Admin role to this endpoint
		idExample = '64cceef9-3a01-49ae-a23b-3761b604800b';
		const response = await supertest(app).post(`/api/v1/policies/id/${idExample}`).set(authTokenAdmin);

		expect(response.status).toBe(200);
		let user = jwt.decode(response.body.accessToken);
		expect(user).toHaveProperty('policyIdLinked');
		expect(user.policyIdLinked).toEqual(idExample);

	});

});