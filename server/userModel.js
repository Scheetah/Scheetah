const mongoose = require('mongoose');

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here

// You must export your model through module.exports
// The collection name should be 'student'
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  
  password: {
    type: String,
    required: true
  }
})


const Student = mongoose.model('user', userSchema);

module.exports = Student