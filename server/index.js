const { User } = require('./models/User')
const express = require('express')

const app = express()
const jwt = require('jsonwebtoken')
const SECRET =  'adwdad12dkk'
app.use(express.json())

app.get('/api/users', async (req,res) => {
  const users = await User.find()
  res.send(users)
})

app.post('/api/register', async (req,res) => {
  const user = await User.create({
    username: req.body.username,
    password: req.body.password
  })
  res.send(user)
})

app.post('/api/login', async (req,res) => {
  const user = await User.findOne({
    username: req.body.username
  })
  if(!user) {
    return res.status(422).send({
      message: '用户还未注册'
    })
  }

  const isPasswordValid = require('bcrypt').compareSync(
    req.body.password,
    user.password
    )
    if(!isPasswordValid) {
      return res.status(422).send({
        message: '密码无效'
      })
    }
    //生成token
    const token = jwt.sign({
      id: String(user._id),
    }, SECRET)
  res.send({
    user,
    token: token
  })
})

const auth = async (req,res,next) => {
  const raw = String(req.headers.authorization).split(' ').pop()
  //pop() 方法用于删除并返回数组的最后一个元素。
  const {id} = jwt.verify(raw, SECRET)
  //只找到对象里面的id
  req.user = await User.findById(id)
  next()
}

app.get('/api/profile', auth, async(req,res) => {
  res.send(req.user)
})


// app.get('api/orders', auth, async(req, res) => {
//   const orders = await orders.find().where({
//     user: req.user
//   })
//   res.send(orders)
// })


app.listen(3000, () => {
  console.log('http://localhost:3000')
})