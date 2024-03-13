const moviesServices = require("../services/moviesServices")
module.exports = {
    getMovies: async (req,res) => {
        try {
        const movieList = await moviesServices.getMovies()
        res.status(200).json(movieList)
        } catch (error) {
            res.status(500).json({
                error:"no se encontraron peliculas"
            })
        }
    }
}