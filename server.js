//^import modules
const express = require('express');
const app = express();

const router = require('./app/middlewares/router');

const articles = require('./app/data/articles.json');
app.locals.articles = articles;

/* console.log(app.locals.articles); */
const category = require('./app/middlewares/category')

app.use(express.urlencoded({ extended: true }));

//~ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

//~static
app.use('/', express.static('static'));

//~middlewares
//routes
app.use(router);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running server on http://localhost:${PORT}`);
});
