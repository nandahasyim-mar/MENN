const { ObjectId } = require('mongodb');
const db = require('../config/db');
const Movie = db.collection('Movies');

class MovieModel {
    static find() {
        return Movie.find().toArray()
    }

    static create(data) {
        return Movie.insertOne(data)
    }

    static findById(id) {
        return Movie.findOne({ _id: ObjectId(id) })
    }

    static updateById(id, data) {
        return Movie.updateOne({ _id: ObjectId(id) }, { $set: data })
    }

    static destroById(id) {
        console.log(id, 'l;e;e')
        return Movie.deleteOne({ _id: ObjectId(id) })
    }
}

module.exports = MovieModel