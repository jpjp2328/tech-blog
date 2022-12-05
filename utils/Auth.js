//Redirects the user if not Logged in
const withAuth = (req, res, next) => {
    if(!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;