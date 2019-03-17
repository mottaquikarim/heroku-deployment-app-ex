const request = require('supertest')
const {app,} = require('../app')

test('when making GET request to /ping, we get back {"pong": true}', done => {
    request(app)
        .get('/ping')
        .then(response => {
            expect(response.body).toEqual({"pong": true})
            done()
        })
})
