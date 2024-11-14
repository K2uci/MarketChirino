const pg = require('../../models/bd');

const deleteOne = async ( req , res ) => {
    res.set("Content-Type", "application/json");
    const { id } = req.body;
    try {
        var response = await pg.query(`delete from products where id=${id};`);
        res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
    }
}

module.exports = deleteOne;