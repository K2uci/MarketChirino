const pg = require('../../models/bd')

const loadAll = async ( req , res ) => {
    res.set("Content-Type", "application/json");
    try {
        var response = await pg.query('SELECT * FROM products;');
        res.status(200).json(response.rows);
        return 
    } catch (error) {
        console.log(error)
    }
}

module.exports = loadAll;