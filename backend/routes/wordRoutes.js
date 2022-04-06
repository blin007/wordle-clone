const express = require('express');
const router = express.Router();
const {getWords, addWords} = require('../controllers/wordController');

router.get('/list',getWords);
router.post('/add',addWords);

module.exports = router;
