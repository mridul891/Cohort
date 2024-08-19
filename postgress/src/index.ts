// write a function to create a user table in the database 

import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
})


const userTable = async () => {
    await client.connect()
    const result = await client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`)
    console.log(result)
}
// userTable()

type User = {
    username: string,
    password: string,
    email: string
}
// This is an insecure way to inject the data in the database any one can change the value and inject its own query
const insertData = async () => {
    await client.connect()
    const result = await client.query(`INSERT INTO users (username , email , password) VALUES ('mridul', 'pandey@gmail.com', '12345678');`)
    console.log(result)
}
// insertData()


// Secured Way 
const secureInsert = async (user: User) => {
    try {
        await client.connect()
        const InsertQuery = `INSERT INTO users (username , email , password) VALUES ($1 , $2, $3);`
        const values = [user.username, user.email, user.password]
        const response = await client.query(InsertQuery, values)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
secureInsert({ username: "manu", email: "pandeye891@gmail.com", password: "123sfdd" })

const getData = async () => {
    // await client.connect()
    const result = await client.query(`SELECT * FROM users;`)
    console.log(result)
}
getData()