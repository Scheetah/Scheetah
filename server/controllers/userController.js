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
    // const pass = req.body.password
    
  
    // res.sendStatus(200)

    console.log(user)
    User.findOne({
        username: user
      }, (err, result) => {
        // console.log(result)
        if (result === null){
           res.sendStatus(418)
        }
      })
      .then(data => res.status(201).json(data))
      .catch(err => 
        res.status(418).json({
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
  createNote (req, res) {
    console.log('creatingnote!')
    const { username, text, column} = req.body;

    // console.log(req.body)
    // let data = {
    //   "text": text,
    //   "column": column
    // }
    let data;
    let update;
    const person = User.findOne({username}, (err,res) => {
      data = res.data;
      // console.log("dataz" ,dataz)
      // console.log(res.data)
    }).then(() => {
      data = data.concat({text, column})
      console.log(data)
    }).then(() => {
      const filter = {username: username}
      update = {"data": data}
      User.findOneAndUpdate(filter, update, ((err, result) => {
        if (err){
          res.sendStatus(418)
        } else {
          res.sendStatus(200)
        }
      }))
    })
   
  },

  save(req, res){
    console.log('savingNotes!')
    const {username, data} = req.body

    let datas;

    const person = User.findOne({username}, (err,res) => {
      datas = res.data;
     
    }).then(() => {
      datas = data
      console.log('data: ', data);
    }).then(() => {
      const filter = {username: username}
      update = {data: datas}
      User.findOneAndUpdate(filter, update, ((err, result) => {
        if (err){
          res.sendStatus(418)
        } else {
          res.sendStatus(200)
        }
      }))
    })
  },

  //delete Note
  deleteNote(req, res){
    console.log('deleting!')
    const { username, text, column} = req.body;

    let dataz;

    let filterData = []
    User.findOne({username}, (err,res) => {
      // let filterData = []
      res.data.forEach((el) => {
         if (el["text"] !== text){
           filterData.push(el)
         }
       })
    })

    .then(() => {
      const filter = {username: username}
      update = {"data": filterData}
      User.findOneAndUpdate(filter, update, ((err, result) => {
        if (err){
          res.sendStatus(418)
        } else {
          res.sendStatus(200)
        }
      }))
    })
    
  }
}

module.exports = userController;