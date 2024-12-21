import { Database } from './utils/Database.js';

const db1 = Database.getInstance();
db1.query('SELECT * FROM books');

const db2 = Database.getInstance();
console.log(db1, db2);
console.log(db1 === db2); // true

