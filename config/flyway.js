require('dotenv').config()
const { exec } = require('child_process')

exec(`flyway -user=${process.env.DB_USERNAME} -password=${process.env.DB_PASSWORD} -url=jdbc:postgresql://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME} -locations=filesystem:./../migration migrate`, {
    cwd: __dirname,
}, (err, stdout, stderr) => {
  err ? console.error('Runtime error on Flyway ', err) : console.log(stdout, stderr);
})