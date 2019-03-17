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

test('when making GET request to /, we get back {"test": true}', done => {
    request(app)
        .get('/')
        .then(response => {
            expect(response.body).toEqual({"test": true})
            done()
        })
})
