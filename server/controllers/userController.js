const User = require('../userModel');

const userController = {

  //User Create

  createUser(req, res) {
    console.log('testing')

    const {
      username,
      password,
    } = req.body;

    User.create({
        username,
        password,
        data: []
      })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(418).json({
        error: 'Error adding user'
      }))
  },

  //Read User

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
  },

  //what we have
  //req.body.username
  //req.body.text
  //req.body.column

  //post 
  //udpate the schema data

  //create Note
  createNote(req, res) {
    console.log('creatingnote!')
    const { username, text, column} = req.body;

    const filter = {username};
    const update = {data: 'hello'};
    User.findOneAndUpdate(filter,update, ((err, result) => {
      if (err){
        res.sendStatus(418)
      } else {
        res.sendStatus(200)
      }
    }));
    
  },

  //delete Note
  deleteNote(req, res){

  }
}

module.exports = userController;