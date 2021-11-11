function authorize(permissionRoles) {
    return (req, res, next) => {
        let allowed = false
        req.user.roles.map(role => {
            if(permissionRoles.includes(role)) {
                allowed = true
            }
        })

        if (! allowed) return res.status(403).send({message: "not allowed to access this page."});

        return next();
    }
}

module.exports = authorize;