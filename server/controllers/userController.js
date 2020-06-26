const User = require('../userModel');

const userController = {

createUser(req, res){
    console.log('creatingUser')

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
          error: 'Error adding student'
        }))
    },

    getUser(req, res) {
    const user = req.params.user;

    User.findOne({
        username: user
        })
        .then(data => res.status(201).json(data))
        .catch(err => res.status(418).json({
        error: 'Cannot find student by that name'
        }))
    }
}

module.exports = userController;