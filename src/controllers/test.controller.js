import { Pool } from 'pg'

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'ubuntu4postgresql',
    database: 'firstapi',
    port: '5432'
})

const showTest = (req,res) => {
    res.json('test routes 1')
}

const getUsers = async (req,res) => {
    const response = await pool.query('SELECT * FROM users')
    console.log(response)
    // res.send('users')
    res.json(response.rows)
}

const createUser = async (req,res) => {
    const { name, email } = req.body
    const response = await pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2)',
        [name, email]
    )
    console.log(response)
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email}
        }
    })
}

module.exports = {
    showTest,
    getUsers,
    createUser
}