const express = require('express');
const bodyParser = require('body-parser');

const {User,} = require('./users')

const app = express();
app.use(bodyParser.json());
app.get('/ping', (req, res) => {
    res.json({'pong': true})
});
app.get('/', (req, res) => {
    res.json({'test': true})
})

app.post('/user', (req, res) => {
    User.addUser(req.body)
        .then(_ => {
            res.status(200)
            res.json({"success": true})
        })
        .catch(e => {
            res.status(400)
            res.json({"success": false, "err": e,})
        })
})

app.get('/users', (req, res) => {
    User.getUsers()
        .then(data => {
            res.status(200)
            res.json({
                "success": true,
                "data": data,
            })
        })
        .catch(e => {
            res.status(400)
            res.json({"success": false, "err": e,})
        })
})

module.exports = {app,}
