const jwt = require('express-jwt');
const { secret } = require('config.json');
const db = require('_helpers/db');



function authorize() {
    return [
        jwt({ secret, algorithms: ['HS256'] }),


        async (req, res, next) => {
            // get user with id from token 'sub' (subject) property
            // const user = await db.User.findByPk(req.user.sub);

            // // check user still exists
            // if (!user)
            //     return res.status(401).json({ message: 'Unauthorized' });

            // // authorization successful
            // req.user = user.get();
            next();
        }
    ];
}

module.exports = authorize;