const express = require('express');
const router = express.Router();
const dispatch = require('../logique/dispatch');
const reqSearch = require('./search');

router.get('/', (req, res, next) => {
    res.render('./index.ejs');
});

router.get('/article/:id', dispatch, (req, res, next) => {
    next();
});

//WIP CATEGORY
router.get('/category', reqSearch, (req, res, next) => {
    
    console.log('CATEGORY');
});


router.get('/category/:categoryName', (req, res)=> {
    const searchedCategory = req.params.categoryName;

    const allArticles = req.app.locals.articles;

    const filteredArticles = allArticles.filter(
        article => article.category === searchedCategory
    );

    res.render('categoryv2', {articles: filteredArticles, text: searchedCategory});
});

module.exports = router;

