const express = require('express');
const router = express.Router();
const goals = require('../goals');

router.get('/', (req, res) => res.render('index', {
	title: 'aff.dev | Home',
	navActive: 'index'
}));
router.get('/goals', (req, res) => res.render('goals', {
	title: 'aff.dev | Bucket List', 
	goals,
	navActive: 'goals'
}));

module.exports = router;
