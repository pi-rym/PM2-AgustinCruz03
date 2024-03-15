const Movie = require("../Models/Movie")

module.exports = {
    getMovies: async() => {
        try {
          const movies = await Movie.find()
          return movies
        } catch (error) {
          throw Error("error de database")
        }
    }
}