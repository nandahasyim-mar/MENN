const router = require('express').Router();
const MovieController = require('../controllers')

router.get('/', MovieController.showMovie)
router.post('/', MovieController.create)
router.get('/:id', MovieController.showById)
router.delete('/:id', MovieController.deleteById)

module.exports = router