const router = require('express').Router();
const { accesdata } = require('../controllers/index2');

// GET localhost:8080/batman => Ambil data film title batman
router.get('/batman', accesdata.addacces2);

module.exports = router;