const {db,} = require('./db')
const User = {}

User.addUser = ({name, email, phonenumber}) => db.none(
    `INSERT into users (name, email, phonenumber) VALUES ($1, $2, $3)`, 
    [name, email, phonenumber]
)

User.getUsers = () => db.any(`SELECT * FROM users`);

module.exports = {User,}
