const session = require('express-session');
function userLoggedin (req, res, next) {
    res.locals.login = false;
    
    if (req.session.userLogged) {
        res.locals.login = true;
        res.locals.user = req.session.userLogged;
    }
    next();
}

module.exports = userLoggedin;