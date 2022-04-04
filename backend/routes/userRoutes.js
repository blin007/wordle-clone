const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMyWords } = require('../controllers/userController');

/**routes:
 *  POST /register <- public
 *  POST /login <- public
 *  GET /mywords <- only for authorized users
 */

router.post('/register', registerUser);
//{ failureRedirect: '/login', failureMessage: true }
router.post('/login', loginUser);
// router.get('/mywords', getMyWords);

module.exports = router;
