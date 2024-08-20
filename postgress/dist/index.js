"use strict";
// write a function to create a user table in the database 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
});
const userTable = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const result = yield client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`);
    console.log(result);
});
// This is an insecure way to inject the data in the database any one can change the value and inject its own query
const insertData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const result = yield client.query(`INSERT INTO users (username , email , password) VALUES ('mridul', 'pandey@gmail.com', '12345678');`);
    console.log(result);
});
// insertData()
// Secured Way 
const secureInsert = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const InsertQuery = `INSERT INTO users (username , email , password) VALUES ($1 , $2, $3);`;
        const values = [user.username, user.email, user.password];
        const response = yield client.query(InsertQuery, values);
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
});
// secureInsert({ username: "manu", email: "pandeye891@gmail.com", password: "123sfdd" })
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    // await client.connect()
    const result = yield client.query(`SELECT * FROM users;`);
    console.log(result);
});
// getData()
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const query = 'SELECT * FROM users WHERE email = $1';
        const value = [email];
        const result = yield client.query(query, value);
        if (result.rows.length > 0) {
            console.log('User Found : ', result.rows[0]);
            return result.rows[0];
        }
        else {
            console.log('user Not Found');
            return null;
        }
    }
    catch (error) {
        console.log(error);
    }
});
getUser("pandeye891@gmail.com");
// Realtionship and Transactions 
const AddreesTable = () => __awaiter(void 0, void 0, void 0, function* () {
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
    `;
    const result = yield client.query(query);
    console.log(result);
});
// AddreesTable()
const InsertAddress = (user_id, city, country, street, pincode) => __awaiter(void 0, void 0, void 0, function* () {
    // await client.connect()
    const query = 'INSERT INTO addresses (user_id ,city ,country ,street ,pincode ) VALUES ($1 ,$2 ,$3 ,$4,$5);';
    const value = [user_id, city, country, street, pincode];
    const result = yield client.query(query, value);
    console.log(result);
});
// InsertAddress(34, 'ghaziabad', 'India', 'Vaishali ', 201010);
// Joins 
const datausingJoins = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    // await client.connect()
    const query = 'SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1; ';
    const value = [user_id];
    const result = yield client.query(query, value);
    if (result.rows.length > 0) {
        console.log('User Found : ', result.rows[0]);
        return result.rows[0];
    }
    else {
        console.log('user Not Found');
        return null;
    }
});
datausingJoins(34);
