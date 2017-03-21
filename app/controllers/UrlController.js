const UrlService = require('../services/UrlService');


class UrlController {

    addUrl(req, res) {
        let post = req.body;
        let tmp = post.url;
        console.log(tmp);
    }

}

module.exports = new UrlController();
