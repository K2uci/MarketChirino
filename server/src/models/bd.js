const { Pool } = require('pg');

// Configuración de la conexión a PostgreSQL
const pg = new Pool({
    user: 'postgres',       // Reemplaza con tu usuario
    host: 'localhost',
    database: 'Market_Chirino', // Reemplaza con el nombre de tu base de datos
    password: 'root', // Reemplaza con tu contraseña
    port: 5432,
});

module.exports = pg;