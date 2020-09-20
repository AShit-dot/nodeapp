const {Router} = require('express');
const router = Router();
const Course = require('../models/course');

router.get('/', function (req, res) {
    res.render('add', { title: 'Add page', isAdd: true});
});

router.post('/', function (req, res) {
    const {title, price, url} = req.body;
    const course = new Course(title, price, url);
    course.save();
    console.log(req.body);
    res.redirect('/courses');
});

module.exports = router