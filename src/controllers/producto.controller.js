import { Pool } from 'pg'

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'ubuntu4postgresql',
    database: 'firstapi',
    port: '5432'
})

const getProducts = async (req,res) => {
    const response = await pool.query('SELECT * FROM users')
    console.log(response)
    // res.send('users')
    res.json(response.rows)
}

module.exports = {
    getProducts
}