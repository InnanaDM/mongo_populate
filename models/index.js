
// exporting the object that contains everything in our modules folder
module.exports = {

    // .exports will send all inputs to route Notes inside of modules folder
    Note: require("./Note"),

     // .exports will send all inputs to route User inside of modules folder
    User: require("./User")
};