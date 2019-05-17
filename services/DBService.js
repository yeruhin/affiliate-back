var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'word_db',
});

connection.connect(err => {
  if (err) throw new Error('mySql failed connection!');
  console.log('connected to SQL server');
})

async function runSQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, function (error, results, fields) {
      if (error) reject(error);
      else resolve(results);
    });
  })
}

module.exports = {
  runSQL
}
