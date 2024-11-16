const pg = require('../../models/bd');

const updateProduct = async (req, res) => {
    const { id } = req.params; // Asumiendo que el ID se pasa como un parámetro en la URL
    const { name, price, description, category, gender, size, color, image } = req.body;

    try {
        // Actualiza un producto existente en la tabla
        const query = `
            UPDATE products
            SET name = $1, price = $2, description = $3, category = $4, gender = $5, 
                size = $6, color = $7, image = $8, updated_at = CURRENT_TIMESTAMP
            WHERE id = $9
            RETURNING *;
        `;
        const imageBuffer = Buffer.from(image, 'base64');
        const values = [name, price, description, category, gender, size, color, imageBuffer, id];
        const response = await pg.query(query, values);

        if (response.rowCount === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        // Devuelve el producto actualizado
        res.status(200).json(response.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

module.exports = updateProduct;