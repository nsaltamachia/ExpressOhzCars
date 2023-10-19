const Car = require("../models/car");

const index = (req, res) => {
    res.render("cars/index"), {
        cars: Car.getAll(),
        title: "All Cars",
    }
}










module.exports = {
    index
}