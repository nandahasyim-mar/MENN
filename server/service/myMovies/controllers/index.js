const Movie = require('../models')

class MovieController {
    static showMovie (req, res) {
        try {
            Movie.find()
            .then(data => {
                res.status(200).json(data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    static create(req, res) {
        try {
            let data = {
                title: req.body.title,
                overview: req.body.overview,
                // poster path,
                popularity: req.body.popularity,
                tags: req.body.tags
            }
            Movie.create(data)
            res.status(201).json({ message: "Success insert movie list"})
        } catch (err) {
            console.log(err)
        }
    }

    static showById(req, res) {
        try {
            let id = req.params.id
            console.log(id, 'sini')

            Movie.findById(id)
            .then(data => {
                res.status(200).json(data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteById (req, res) {
        try {
            let id = req.params.id

            let movie = await Movie.findById(id)
            console.log(movie, 'pertama')
            let movieDelete = await Movie.destroById(id)
            console.log(movieDelete, 'kedua')
            res.status(200).json({ message: `Success delete Movie: ${movie.title}` })

        } catch (error) {
            
        }
        
    }
}

module.exports = MovieController;