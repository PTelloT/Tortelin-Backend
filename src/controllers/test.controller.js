require('dotenv').config()

import { Pool} from 'pg'
import { poolLocal, poolAzureMain, connectionString } from '../db_conexion/conexionTest'

const showTest = (req,res) => {
    res.json('test routes 1')
}

const getUsers = async (req,res) => {
    const poolAzure = new Pool({
        connectionString: process.env.POSTGRESQLCONNSTR_TestPostgresqlAzure || connectionString
    })
    try {
        console.log('Metodo: GET  , Ruta: /test/users')
        console.log('Conectandose a la Base de Datos ...')
        const clientAzure = await poolAzure.connect();

        console.log('Esperando resultados de la consulta ...')
        const query = 'SELECT * FROM users'
        const result = await clientAzure.query(query)
        clientAzure.release() // Liberar el cliente al devolverlo al pool
        
        console.log('Resultados de la consulta:', result.rows)
        res.json(result.rows)
    }catch(err){
        console.error('Error al conectar o ejecutar la consulta', err);
    }finally{
        await poolAzure.end((err) => {
            if (err) {
              console.error('Error al cerrar la conexión:', err);
            } else {
              console.log('Conexión cerrada exitosamente');
            }
        })
    }
}

const createUser = async (req,res) => {
    const { name, email } = req.body
    const response = await poolLocal.query(
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