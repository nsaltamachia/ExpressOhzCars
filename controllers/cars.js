const Car = require("../models/car");

const index = (req, res) => {
    res.send({ cars: Car.getAll() })

}










module.exports = {
    index
}