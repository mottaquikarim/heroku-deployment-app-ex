jest.mock('../db')
const {db,} = require('../db')
const {User,} = require('../users')

test('getUsers returns promise', done => {
    db.any.mockImplementation((...rest) => Promise.resolve())

    User.getUsers()
        .then(_ => {
            expect(db.any.mock.calls[0][0]).toBe(`SELECT * FROM users`)
            done()
        })
})

test('addUser returns promise', done => {
    db.none.mockImplementation((...rest) => Promise.resolve())
    User.addUser({
        'name': 'a',
        'email': 'b',
        'phonenumber': 'c',
    }).then(_ => {
        expect(db.none.mock.calls[0][0]).toBe(`INSERT into users (name, email, phonenumber) VALUES ($1, $2, $3)`);
        expect(db.none.mock.calls[0][1]).toEqual(['a', 'b', 'c']);
        done()
    })
    
})

