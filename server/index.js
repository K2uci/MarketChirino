// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import pg from 'pg';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// dotenv.config();

// const app = express();
// const { Pool } = pg;

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || '5432'),
// });

// app.use(cors());
// app.use(express.json());

// // Middleware de autenticación
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) return res.sendStatus(401);

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };

// // Rutas de productos
// app.get('/api/products', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post('/api/products', authenticateToken, async (req, res) => {
//   const { name, price, description, category, gender, size, color, image } = req.body;
  
//   try {
//     const result = await pool.query(
//       'INSERT INTO products (name, price, description, category, gender, size, color, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
//       [name, price, description, category, gender, size, color, image]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.put('/api/products/:id', authenticateToken, async (req, res) => {
//   const { id } = req.params;
//   const { name, price, description, category, gender, size, color, image } = req.body;
  
//   try {
//     const result = await pool.query(
//       'UPDATE products SET name = $1, price = $2, description = $3, category = $4, gender = $5, size = $6, color = $7, image = $8, updated_at = NOW() WHERE id = $9 RETURNING *',
//       [name, price, description, category, gender, size, color, image, id]
//     );
//     res.json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.delete('/api/products/:id', authenticateToken, async (req, res) => {
//   const { id } = req.params;
  
//   try {
//     await pool.query('DELETE FROM products WHERE id = $1', [id]);
//     res.sendStatus(204);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Rutas de autenticación
// app.post('/api/auth/login', async (req, res) => {
//   const { email, password } = req.body;
  
//   try {
//     const result = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
//     const admin = result.rows[0];

//     if (!admin || !bcrypt.compareSync(password, admin.password_hash)) {
//       return res.status(401).json({ error: 'Credenciales inválidas' });
//     }

//     const token = jwt.sign({ id: admin.id, role: 'admin' }, process.env.JWT_SECRET, {
//       expiresIn: '24h'
//     });

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const express = require('express');
// const { Pool } = require('pg');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;

// Middleware
// app.use(bodyParser.json());

// // Configuración de la conexión a PostgreSQL
// const pool = new Pool({
//     user: 'postgres',       // Reemplaza con tu usuario
//     host: 'localhost',
//     database: 'Market_Chirino', // Reemplaza con el nombre de tu base de datos
//     password: 'root', // Reemplaza con tu contraseña
//     port: 5432,
// });

// // Rutas
// app.get('/items', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM items');
//         res.json(result.rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error en la consulta');
//     }
// });

// app.post('/items', async (req, res) => {
//     const { nombre, descripcion } = req.body;
//     try {
//         const result = await pool.query('INSERT INTO items (nombre, descripcion) VALUES ($1, $2) RETURNING *', [nombre, descripcion]);
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error al insertar el item');
//     }
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

const app = require('./src/app')

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});