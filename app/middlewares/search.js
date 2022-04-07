const reqSearch = (req, res, next) => {
    console.log('REQ SEARCH');

    let search = req.query.search;
    const foundSearch = req.app.locals.articles;

    if(search === undefined) {
        search = "";
    }

    search = search.toLowerCase();

    const filteredArticles = foundSearch.filter((element) => {
       return element.category.toLowerCase().includes(search)
    });

    console.log(filteredArticles);
    //res.render('category', {search, filteredArticles, text: "Found"});
    
    if(filteredArticles.length === 0) {
        res.render('category', {search,filteredArticles, text: "Aucun article trouvé"});
    }
    else {
        res.render('category', {filteredArticles, search,  text: "Found"});

    }
    console.log('REQ SEARCH END');
};

module.exports = reqSearch;