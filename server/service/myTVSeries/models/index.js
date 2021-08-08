const db = require('../config/db');
const series = db.collection('Series');
const { ObjectId } = require('mongodb');

class Series {
    static find() {
        return series.find().toArray();
    };

    static create(data) {
        return series.insertOne(data);
    };

    static findById(id) {
        return series.findOne({_id: ObjectId(id)});
    };

    static update(id, data) {
        return series.updateOne({_id: ObjectId(id)}, {$set: data});
    };

    static delete(id) {
        return series.deleteOne({_id: ObjectId(id)});
    };
}


module.exports = Series;