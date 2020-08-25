const router = require('express').Router();
const { viewAllNews, createNews, deleteById } = require('../controller/news');

router.get('/news', viewAllNews);
router.post('/news', createNews);
router.delete('/news/:id', deleteById);

module.exports = router;
