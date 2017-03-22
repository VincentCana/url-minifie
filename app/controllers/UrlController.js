const UrlService = require('../services/UrlService');
const UserService = require('../services/UserService');

class UrlController {

    addUrl(req, res) {
        let url = req.body.url;
        if (UrlService.validateUrl(url)){
            let resUrl = UrlService.addUrl(url);
            if(resUrl !== false) {
                res.status(200).send(resUrl);
            }
        } 
        res.status(400).send('error');
    }

    removeUrl(req, res) {
        res.send('remove Url');
    }

    getUrls(req, res) {
        res.send('get urls');
    }
}

module.exports = new UrlController();
