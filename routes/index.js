var express = require('express');
var router = express.Router();
var get = require('../helpers/get');
var args = { testMsj: get("qwdwq") };
var soap = require('soap');
var serviceUrl = require('../config/serviceUrl');

router.get('/',  function (req, res, next) {
    res.send(req.query);
    /*
    soap.createClient(serviceUrl, function (err, client) {
        client.setSecurity(new soap.BasicAuthSecurity('999999', '999999testtest'));
        client.servisTest(args, function (err, result) {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        });
    })

*/

});

module.exports = router;
