// app.js -- 入口文件
const express = require("express")
const app = express()

//解析请求数据
app.use(express.json())
app.use(express.urlencoded())

//解决跨域问题
const cors = require('cors')
app.use(cors())

const users_router = require("./router/users")
app.use("/user", users_router)

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})