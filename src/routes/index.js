const express =  require('express');
const router = express.Router();

router.get('/', (req, resp) => {
    resp.render('index', {title: 'Kevin Website'});
});

router.get('/contact', (req, resp) => {
    resp.render('contact', {title: 'Contact'});
});

module.exports = router;