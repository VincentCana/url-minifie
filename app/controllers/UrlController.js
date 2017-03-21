const UrlService = require('../services/UrlService');


class UrlController {

  addUrl(req, res){
    res.send('coucou');
  }

}

module.exports = new UrlController();
