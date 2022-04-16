const express = require('express');
const router = express.Router();
const {getWords, addWords, delWord} = require('../controllers/wordController');

router.get('/list',getWords);
router.post('/add',addWords);
router.delete('/delete',delWord);

module.exports = router;
