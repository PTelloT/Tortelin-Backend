require('dotenv').config()

import app from "./app"

//necesita dotenv
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("app.listen")
})

console.log("servidor escuchando con nodemon", port)