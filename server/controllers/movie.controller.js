const { Sequelize: { Op }, Movie } = require("../models");

module.exports = {
    findAll: (req, res) => {
        const { title } = req.query;
        const condition = title != "" ? { title: { [Op.like]: `%${title}%` } } : null

        return Movie.findAll({ where: condition }).then(movies => res.json(movies)).catch(error => res.json(error));
    },    
    create: (req, res) => {
        Movie.create(req.body).then(movie => res.json(movie)).catch(error => res.json(error));
    }
}