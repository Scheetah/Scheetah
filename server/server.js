const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const  mongoose  = require("mongoose");

const PORT = 3000;

const userController = require('./controllers/userController')


mongoose.connect('mongodb+srv://win:winfordlin@users-jo7j2.mongodb.net/users?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use("/", express.static(path.join(__dirname, '../build')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// app.get('/Main', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/components/Main.jsx'));
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRouter = express.Router()

// when user signs up, we create a user
userRouter.post('/signup', userController.createUser);

// verify user upon login
userRouter.get('/:username', userController.getUser);

//create note
userRouter.post('/createNote', userController.createNote);

//delete note
userRouter.post('/deleteNote', userController.deleteNote);

app.use('/', userRouter);

app.listen(3000);





// linwinford@gmail.com
// winfordlin123!


