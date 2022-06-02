const session = require('express-session');

function userLoggedin (req, res, next) {
    res.locals.login = false;
    res.locals.name = 'Debe iniciar sesión';
    
    if (req.session.userLogged) {
        res.locals.login = true;
        res.locals.name = req.session.userLogged.name;
    }
    next();
}

module.exports = userLoggedin;