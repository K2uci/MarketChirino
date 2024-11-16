const pg = require('../../models/bd')

const loadAll = async ( req , res ) => {
    res.set("Content-Type", "application/json");
    try {
        var response = await pg.query('SELECT id , name, price, description, category, gender, size, color, image, rating FROM products;');
        response.rows.map(item => item['image'] = item['image'].toString('base64'))
        res.status(200).json(response.rows);
        return 
    } catch (error) {
        console.log(error)
    }
}

module.exports = loadAll;