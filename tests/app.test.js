const request = require('supertest')
jest.mock('../users')
const {User,} = require('../users')
const {app,} = require('../app')

test('when making GET request to /users, if db query is successful, expect 200', done => {
    User.getUsers.mockImplementation(() => {
        return Promise.resolve();
    })
    request(app)
        .get('/users')
        .then(response => {
            expect(response.status).toBe(200)
            done()
        })
})

test('when making GET request to /users, if db query is NOT successful, expect 400', done => {
    User.getUsers.mockImplementation(() => {
        return Promise.reject();
    })
    request(app)
        .get('/users')
        .then(response => {
            expect(response.status).toBe(400)
            done()
        })
})


test('when making POST request to /user, if db query is successful, expect 200', done => {
    User.addUser.mockImplementation(() => {
        return Promise.resolve();
    })
    request(app)
        .post('/user')
        .then(response => {
            expect(response.status).toBe(200)
            done()
        })
})

test('when making POST request to /user, if db query is NOT successful, expect 400', done => {
    User.addUser.mockImplementation(() => {
        return Promise.reject();
    })
    request(app)
        .post('/user')
        .then(response => {
            expect(response.status).toBe(400)
            done()
        })
})

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
