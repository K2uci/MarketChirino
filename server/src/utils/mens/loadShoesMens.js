const pg = require('../../models/bd')

const loadUpMens = async ( req , res ) => {
    res.set("Content-Type", "application/json");
    try {
        var response = await pg.query('SELECT * FROM products;');
        res.status(200).json(response.rows);
        return 
    } catch (error) {
        // res.status(400).json(JSON.stringify(error));
        console.log(error)
    }
}

module.exports = loadUpMens;
