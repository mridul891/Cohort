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
// secureInsert({ username: "manu", email: "pandeye891@gmail.com", password: "123sfdd" })

const getData = async () => {
    // await client.connect()
    const result = await client.query(`SELECT * FROM users;`)
    console.log(result)
}
// getData()

const getUser = async (email: string) => {
    try {
        await client.connect()
        const query = 'SELECT * FROM users WHERE email = $1';
        const value = [email]
        const result = await client.query(query, value)

        if (result.rows.length > 0) {
            console.log('User Found : ', result.rows[0])
            return result.rows[0];
        } else {
            console.log('user Not Found')
            return null
        }
    } catch (error) {
        console.log(error)
    }
}
getUser("pandeye891@gmail.com");

// Realtionship and Transactions 

const AddreesTable = async () => {
    // await client.connect()
    const query = `
    CREATE TABLE addresses (
    id SERIAL PRIMARY KEY , 
    user_id INTEGER NOT NULL , 
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL  ,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    `
    const result = await client.query(query)
    console.log(result)
}
// AddreesTable()

const InsertAddress = async (user_id: Number, city: string, country: string, street: string, pincode: Number) => {
    // await client.connect()
    const query = 'INSERT INTO addresses (user_id ,city ,country ,street ,pincode ) VALUES ($1 ,$2 ,$3 ,$4,$5);'
    const value = [user_id, city, country, street, pincode]
    const result = await client.query(query, value)
    console.log(result)
}
// InsertAddress(34, 'ghaziabad', 'India', 'Vaishali ', 201010);

// Joins 

const datausingJoins = async (user_id: number) => {
    // await client.connect()
    const query = 'SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1; '
    const value = [user_id];
    const result = await client.query(query, value)
    if (result.rows.length > 0) {
        console.log('User Found : ', result.rows[0])
        return result.rows[0];
    } else {
        console.log('user Not Found')
        return null
    }
}
datausingJoins(56)