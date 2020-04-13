const express = require('express');
const mysql = require('mysql');
const common = require('../libs/common');
const db = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: '123456',
  database: 'admin',
});
module.exports = () => {
  const route = express.Router();
  //get homePage datas
  const swiperstr = `SELECT * FROM homeswiper ORDER BY product_id desc`;
  //获取轮播图
  route.get('/swiper', (req, res) => {
    getSwiperDatas(swiperstr, res);
  });
  function getSwiperDatas(swiperstr, res) {
    db.query(swiperstr, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('database err').end();
      } else {
        if (data.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          res.send(data);
        }
      }
    });
  }
  
  //获取首页导航
  const navsstr = `SELECT * FROM navs ORDER BY category_id desc`;
  route.get('/navs', (req, res) => {
    getNavs(navsstr, res);
  });
  
  function getNavs(navsstr, res) {
    db.query(navsstr, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('database err').end();
      } else {
        if (data.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          res.send(data);
        }
      }
    });
  }
  //获取分类一级或者二级
  route.get('/category', (req, res) => {
    let categoryId = req.query.categoryId;
    const sql = `select  * from category where  category.category_pid='${categoryId}'`;
    getCateNamesDatas(sql, res);
  });
  
  function getCateNamesDatas(sql, res) {
    db.query(sql, (err, data) => {
      if (err) {
        res.status(500).send('database err').end();
      } else {
        if (data.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          res.send(data);
        }
      }
    });
  }
  //获取二级分类的产品
  route.get('/goods', (req, res) => {
    let mId = req.query.mId;
    let pageNum=req.query.pageNum;
    let pageSize=req.query.pageSize;
    let keyType=req.query.keyType;
    let total=pageNum*pageSize;
    let keyWord=""
    if(keyType==2){
      keyWord="sales"
    }else{
      keyWord="product_price"
    }
    const sql = `select * from products where products.category_id='${mId}' ORDER BY ${keyWord} DESC LIMIT ${total} `;
    const sql2 = `select count(*) as total from products where products.category_id='${mId}'`;
    getCateGoods(sql,sql2,pageNum,pageSize, res);
  });
  function getCateGoods(sql,sql2,pageNum,pageSize, res) {
    let listData=[];
    db.query(sql, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('database err').end();
      } else {
        if (data.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          listData=data;
          listData.splice(0,(pageNum-1)*pageSize);
          db.query(sql2, (err, data) => {
            if (err) {
              console.log(err);
              res.status(500).send('database err').end();
            } else {
              if (data.length == 0) {
                res.status(500).send('no datas').end();
              } else {
                res.send({"goods":listData,"total":data[0].total});
              }
            }
          });
        }
      }
    });
    
  }
  //获取产品
  route.get('/detail', (req, res) => {
    let produId = req.query.produId;
    const productStr = `select * from products where product_id='${produId}'`;
    db.query(productStr, (err, data) => {
      if (err) {
        res.status(500).send('database err').end();
      } else {
        if (data.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          res.send(data);
        }
      }
    });
  });
  route.get('/search', (req, res) => {
    let keyWord = req.query.query;
    const hotStr = `select  *  from products where  products.name like '%${keyWord}%' order by sales desc`;
    getSearchDatas(hotStr, res);
  });
  function getSearchDatas(keywordStr, res) {
    db.query(keywordStr, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('database err').end();
      } else {
        if (data.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          res.send(data);
        }
      }
    });
  }
  route.post('/upload', (req, res) => {
    let apiType=req.body.apiType;//post专用
    let token=req.body.token;
    let image=req.body.image;
    // console.log(username, mObj.passwd);
    const selectUser = `SELECT * FROM user where user_name='${username}'`;
    db.query(selectUser, (err, data) => {
      if (err) {
        console.log(err);
        res.send({ msg: '服务器出错', status: 0 }).end();
      } else {
        if (data.length == 0) {
          res.send({ msg: '该用户不存在', status: -1 }).end();
        } else {
          let dataw = data[0];
          //login sucess
          if (dataw.login_password === password) {
            //save the session
            req.session['user_id'] = dataw.user_id;
            dataw.msg = '登录成功';
            dataw.status = 1;
            res.send(dataw).end();
          } else {
            res.send({ msg: '密码不正确', status: -2 }).end();
          }
        }
      }
    });
  });
  /*
   *user reg func
   */
  route.post('/reg', (req, res) => {
    let mObj = {};
    for (let obj in req.body) {
      mObj = JSON.parse(obj);
    }
    let regName = mObj.regName;
    let regPasswd = mObj.regPasswd;
    regPasswd = common.md5(regPasswd + common.MD5_SUFFXIE);
    const insUserInfo = `INSERT INTO user(user_name,login_password,user_number) VALUES('${regName}','${regPasswd}','${regName}')`;
    delReg(insUserInfo, res);
  });
  /*
   *deal user register
   */
  function delReg(insUserInfo, res) {
    db.query(insUserInfo, (err) => {
      if (err) {
        console.error(err);
        res.send({ msg: '服务器出错', status: 0 }).end();
      } else {
        res.send({ msg: '注册成功', status: 1 }).end();
      }
    });
  }
  route.post('/login', (req, res) => {
    let mObj = {};
    for (let obj in req.body) {
      mObj = JSON.parse(obj);
      console.log(mObj);
    }
    let username = mObj.loginName;
    let password = common.md5(mObj.loginPawd + common.MD5_SUFFXIE);
    // console.log(username, mObj.passwd);
    const selectUser = `SELECT * FROM user where user_name='${username}'`;
    db.query(selectUser, (err, data) => {
      if (err) {
        console.log(err);
        res.send({ msg: '服务器出错', status: 0 }).end();
      } else {
        if (data.length == 0) {
          res.send({ msg: '该用户不存在', status: -1 }).end();
        } else {
          let dataw = data[0];
          //login sucess
          if (dataw.login_password === password) {
            //save the session
            req.session['user_id'] = dataw.user_id;
            dataw.msg = '登录成功';
            dataw.status = 1;
            res.send(dataw).end();
          } else {
            res.send({ msg: '密码不正确', status: -2 }).end();
          }
        }
      }
    });
  });
  route.get('/userinfo', (req, res) => {
    let uId = req.query.uId;
    const getU = `SELECT user_name,user_number FROM user where user_id='${uId}'`;
    db.query(getU, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('database err').end();
      } else {
        if (data.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          res.send(data[0]);
        }
      }
    });
  });
  return route;
};
