const router = require('express').Router()
const SeriesController = require('../controllers')

router.get('/', SeriesController.showSeries);
router.post('/', SeriesController.createSeries);
router.get('/:id', SeriesController.showSeriesById);
router.put('/:id');
router.delete('/:id', SeriesController.deleteSeriseById);

module.exports = router