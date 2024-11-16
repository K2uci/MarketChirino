const { Pool } = require('pg');

// // Configuración de la conexión a PostgreSQL local
// const pg = new Pool({
//     user: 'postgres',       // Reemplaza con tu usuario
//     host: 'localhost',
//     database: 'Market_Chirino', // Reemplaza con el nombre de tu base de datos
//     password: 'root', // Reemplaza con tu contraseña
//     port: 5432,
// });

// Configuración de la conexión a PostgreSQL render
const pg = new Pool({
    user: 'postgres.wajvccjztozksftwkzob',       // Reemplaza con tu usuario
    host: 'aws-0-us-west-1.pooler.supabase.com',
    database: 'postgres', // Reemplaza con el nombre de tu base de datos
    password: 'Omeg@-123123-123', // Reemplaza con tu contraseña
    port: 6543,
});

module.exports = pg;