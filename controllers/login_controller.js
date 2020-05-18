/**
 * 
 * LOG IN controller
 */

 const jwt = require('jsonwebtoken')




 module.exports =  async (req,res) => {


if (!req.user) {

    return
}

    const payload = {
        sub: req.user.get('id'),
        username: req.user.get('username'),
       // is_admin: req.user.get('is_admin')
    }

    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET)

    res.send({

        status:'success',
        data: {

            user: req.user
        }
    })
 }