const dispatch = (req, res, next) => {
    let articles = req.app.locals.articles;
    let id = req.params.id;

    let info = articles[id - 1];

    res.render('article', {
        title: `${info.title}`,
        author: `${info.author}`,
        category: `${info.category}`,
        img: `${info.img}`,
        imgAlt: `${info.img_alt}`,
        subtitle: `${info.sub_title}`,
        text: `${info.text}`,
    });

    console.log('Everything is dispatched !');
};

module.exports = dispatch;
