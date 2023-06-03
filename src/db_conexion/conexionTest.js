require('dotenv').config()

import { Pool} from 'pg'

// Coneccion Local
const poolLocal = new Pool ({
    host: process.env.PGLOCALHOST,
    user: process.env.PGLOCALUSER,
    password: process.env.PGLOCALPASSWORD,
    database: process.env.PGLOCALDATABASE,
    port: process.env.PGLOCALPORT
})

// Coneccion Remota
const host = process.env.PGHOST
const user = process.env.PGUSER
const password = process.env.PGPASSWORD
const database = process.env.PGDATABASE
const port = process.env.PGPORT

const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}?sslmode=require`;

const poolAzure = new Pool({
  connectionString: connectionString
});


module.exports = {
    poolLocal,
    poolAzure
}