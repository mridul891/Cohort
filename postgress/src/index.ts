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
const insertData = async () => {
    await client.connect()
    const result = await client.query(`INSERT INTO users (username , email , password) VALUES ('mridul', 'pandey@gmail.com', '12345678');`)
    console.log(result)
}
// insertData()

const getData = async () => {
    // await client.connect()
    const result = await client.query(`SELECT * FROM users;`)
    console.log(result)
}
getData()