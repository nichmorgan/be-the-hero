const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Banco de dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Querys:
 * 
 * Driver: SELECT * FROM users
 * Query builder: table('users').select('*').where(), Mais utilizado knexjs
 */

app.listen(3333);