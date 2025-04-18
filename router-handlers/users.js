// 用户接口实现
const db = require('../db-config')
const dayjs = require('dayjs')



// 用户注册
const users_register = (req, res) => {
  // 获取传入的信息
  const { user_name, user_psw, identity, number, address } = req.body;
  if (!user_name || !user_psw || !number || !address) {
    return res.send({
      status: 0,
      message: "注册信息缺失！"
    })
  }
  // sql语句
  const sql_str = `SELECT * FROM users WHERE user_name = ?`
  db.query(sql_str, user_name, (err, results) => {
    if (err) {
      return res.send({
        status: 0,
        message: err.message
      })
    }
    if (results.length) {
      return res.send({ status: 0, message: "该用户已经存在" });
    }
    const res_date = dayjs().format('YYYY-MM-DD');
    const str_sql2 = 'INSERT INTO users SET ?'
    const address_str = address[0]+address[1]
    db.query(str_sql2, { user_name, user_psw, identity, number, address:address_str, res_date }, (err, insertResult) => {
      if (err) {
        return res.send({
          status: 0,
          message: err.message
        })
      }
      // 获取刚插入的用户ID
      const insertedUserId = insertResult.insertId
      // 查询刚插入的用户信息
      const selectNewUserSql = 'SELECT * FROM users WHERE id = ?'
      db.query(selectNewUserSql, insertedUserId, (err, newUserResults) => {
        if (err) {
          return res.send({
            status: 0,
            message: err.message
          })
        }
        const newUser = newUserResults[0];
        res.send({
          status: 1,
          message: "注册成功！",
          info: newUser
        })
      })
    })
  })
}
// 用户登录
const users_login = (req, res) => {
  const { user_name, user_psw } = req.body
  if (!user_name || !user_psw) res.send({ status: 0, message: "登录信息缺失" })
  const sql_str = "SELECT * FROM users WHERE user_name = ?"
  db.query(sql_str, user_name, (err, results) => {
    if(err) res.send({status:0,message:err})
    if (!results.length) res.send({ status: 0, message: "用户不存在" })
    if (results[0].user_psw !== user_psw) res.send({ status: 0, message: "密码错误" })
    // 动态路由配置
    const router = require("../front-router")[results[0].identity]
    res.send({status:1,message:"登陆成功",info:results[0],router})
  })
}


module.exports = {users_register,users_login}