const express = require('express');
const router = express.Router();
const {getOneWord} = require("../controllers/gameController");

router.get('/game',getOneWord);

module.exports = router;
