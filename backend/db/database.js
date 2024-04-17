import mysql from 'mysql'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'five_alimentos_db'
})

// db.connect((error) => {
//     if (error) throw error;
//     console.log('Connected to the database');
// });

// db.connect()

export {
    db
}