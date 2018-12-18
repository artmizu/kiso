# Kiso 
## Express JS project scaffold

Contain PostgreSQL for a DB migrations through Flyway and Swagger for API documentation.

## Requirements
- Node
- PostgreSQL
- [Flyway](https://flywaydb.org/)
- Nodemon

## Environment file with DB settings
Create a ```.env``` file at the root of the directory and fill it accordingly to your DB settings. For example:
```
DB_USERNAME=dbuser
DB_HOST=yourhost
DB_NAME=databasename
DB_PASSWORD=dbuserpassword
DB_PORT=5432
```