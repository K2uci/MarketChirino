const pg = require('../../models/bd');

const createAllGeneric = async ( req , res ) => {
    const { name , price , description , category , gender , size , color , image } = req.body;
    const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(2);
    try {
        // Inserta un nuevo producto en la tabla
        const query = `
            INSERT INTO products (name, price, description, category, gender, size, color, image, rating)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
        `;
        const imageBuffer = Buffer.from(image, 'base64');

        const values = [name , price, description, category, gender, size, color, imageBuffer, rating];
        const response = await pg.query(query, values);
        res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
    }
}

module.exports = createAllGeneric;