const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/user', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const userSchema = new mongoose.Schema({
  username:{ type: String, unique: true },
  password:{ 
    type: String,
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
   }
})
const User = mongoose.model('User', userSchema, 'users')

module.exports = { User }