// UserDTO.js
class UserDTO {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

module.exports = UserDTO;

const express = require('express');
const sql = require('mssql');
const UserDTO = require('./UserDTO');

const router = express.Router();

router.get('/users/:id', async (req, res) => {
    try {
        const pool = await sql.connect('mssql-connection-string');
        const result = await pool.request()
            .input('id', sql.Int, req.params.id)
            .query('SELECT id, name, email FROM users WHERE id = @id');

        if (result.recordset.length > 0) {
            const user = new UserDTO(
                result.recordet[0].id,
                result.recordset[0].name,
                result.recordset[0].email
            );
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;






class UserDto {
    constructor(user) {
        this.username = user.username;
        this.email = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
    }
}

// usage
const user = new User({
    username: 'test',
    email: 'test@gmail.com',
    firstName: 'John',
    lastName: 'Doe',
    age: 30
});
const userDto = new UserDto(user);




