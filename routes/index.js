var express = require('express');
var router = express.Router();
const servisTest = require('../soap/servisTest')

router.get('/', async function (req, res, next) {
soap.createClient(serviceUrl, function (err, client) {
    client.setSecurity(new soap.BasicAuthSecurity('999999', '999999testtest'));
    client.servisTest(args, function (err, result) {
        if (err) {
            return (err)
        } else {
            return (result)
        }
    });
})



});

module.exports = router;
