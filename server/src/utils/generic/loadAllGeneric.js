const pg = require('../../models/bd')

const loadAll = async ( req , res ) => {
    res.set("Content-Type", "application/json");
    try {
        var response = await pg.query('SELECT * FROM products;');
        res.status(200).json(response.rows);
        return 
    } catch (error) {
<<<<<<< HEAD
=======
        // res.status(400).json(JSON.stringify(error));
>>>>>>> 3cb35d372603af36a6c750cfc15a4ba89270dd69
        console.log(error)
    }
}

module.exports = loadAll;