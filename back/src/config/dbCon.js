const mongoose = require("mongoose")

const dbCon = async () => {
    await mongoose.connect("mongodb+srv://agustincruz0905:odh6qvy9mpl1O7UL@movies.kpvofjd.mongodb.net/Movies")
}

module.exports = dbCon