const pg = require('../../models/bd');

const deleteOne = async ( req , res ) => {
    const { id } = req.params;
    try {
        var response = await pg.query(`delete from products where id=${id};`);
        res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
    }
}

module.exports = deleteOne;