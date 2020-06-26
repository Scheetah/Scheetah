const User = require('../userModel');

const userController = {

createUser(req, res){
    console.log('testing')

    const {
        username,
        password
      } = req.body;
  
      User.create({
          username,
          password
        })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(418).json({
          error: 'Error adding user'
        }))
    },

    getUser(req, res) {
    const user = req.params.username;

    console.log(user)
    User.findOne({
        username: user
        })
        .then(data => res.status(201).json(data))
        .catch(err => res.status(418).json({
        error: 'Cannot find user by that name'
        }))
    }
}

module.exports = userController;