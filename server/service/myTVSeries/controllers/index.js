const SeriesModel = require('../models');


class SeriesController {
    static async showSeries(req, res) {
        try {
            const seriesData = await SeriesModel.find();
            res.status(200).json(seriesData);
        } catch (error) {
            console.log(error);
        };
    };

    static async createSeries(req, res) {
        try {
            let data = {
                title: req.body.title,
                overview: req.body.overview,
                popularity: req.body.popularity,
                tags: req.body.tags
              };

              await SeriesModel.create(data);
              res.status(201).json({message: 'Success insert series'});
        } catch (error) {
            console.log(error);
        };
    };

    static async showSeriesById(req, res) {
        try {
            const id = req.params.id
            const seriesData = await SeriesModel.findById(id)
            res.status(200).json(seriesData)
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteSeriseById(req, res) {
        try {
            const id = req.params.id
            const seriesData = await SeriesModel.findById(id)
            await SeriesModel.delete(id)
            res.status(200).json({ message: `Success delete series: ${seriesData.title}`})
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = SeriesController;