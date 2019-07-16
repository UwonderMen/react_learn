let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require("cookie-parser");
let session = require("express-session");
let app = express();
let users = [];
//const _ = require('lodash');
//let cors = require('cors');
//CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");//来源的域名和端口号
  res.header('Access-Control-Allow-Credentials', true);//来源的域名和端口号
  res.header('Access-Control-Allow-Headers', "Content-Type,Accept");//允许的跨域头
  res.header('Access-Control-Allow-Methods', "GET,POST,PUT,OPTIONS,DELETE");//允许的方法
  res.header('Access-Control-Max-Age', 40000);//允许的方法
  //如果请求的方法名是OPTIONS的话，则直接结束 请求
  //options探测请求 当客户端发送post请求之后行发送一个options请求，看看服务器支持不支持post请求
  if (req.method == 'OPTIONS') {
    return res.sendStatus(200);
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'secret',
}));

// app.use(function (req, res, next) {
//   console.log(users)
//   next();

// });
let sliders = require('./mock/sliders');
app.get('/course/bannerlist', function (req, res) {
  res.json({
    code: 0,
    data: sliders
  });
});
let lessons = require('./mock/lessons');
// http://localhost:3000/getLessons/vue?offset=0&limit=5
app.get('/course/list', function (req, res) {
  // let category = req.params.category;// all react vue 当前的分类
  // http://...getLessons/all?offset=0&limit=5
  let { page, limit, type } = req.query;// 问号传参
  page = isNaN(page) ? 0 : parseInt(page);//起始的索引
  limit = isNaN(limit) ? 5 : parseInt(limit);//每页的条数
  let list = JSON.parse(JSON.stringify(lessons));//深度克隆lessons
  if (type != 'all') {
    list = list.filter(item => item.category == type);
  }
  let total = list.length;//此分类下面的总条数
  let start = page === 1 ? (page - 1) * limit : (page - 1) * limit - 1,
    end = ((page - 1) * limit + limit);

  list = list.slice(start, end);//截取当前页的数据
  // list.forEach(item => item.title = item.title + Math.random());
  res.send({
    total,
    limit,
    page,
    hasMore: total > page + limit,
    code: 0,
    data: list,
  });
});
//此数组存放着用户信息

app.post('/reg', function (req, res) {
  let user = req.body;//得到请求体 body-parser中间件
  user.cart = [];
  users.push(user);
  res.json({
    code: 0,
    msg: '用户注册成功!'
  });
});

app.post('/login', function (req, res) {
  let body = req.body;//得到请求体 body-parser中间件{username,password}
  let user = users.find(item => item.username == body.username && item.password == body.password);
  if (user) {
    req.session.username = body.username;
    res.cookie("username", body.username, {
      maxAge: 1000000,
      path: '/',
      expires: new Date(2019, 07, 20)
    });
    res.send({
      code: 0,
      msg: '用户登录成功!'
    });
  } else {
    res.send({
      code: -1,
      msg: '用户登录失败!'
    });
  }
});

//验证是否登录
app.get("/person/login", (req, res) => {
  let body = req.body;
  let username = req.cookies.username;
  if (username && req.session.username && username == req.session.username) {
    res.json({
      code: 0,
      result: "已登录"
    })
  } else {
    res.json({
      code: -1,
      result: "未登录"
    })
  }
})
app.get("/person/loginout", (req, res) => {
  req.session.username = null;
  res.cookie("username", req.session.username, {
    maxAge: -1,
    path: '/'
  });
  res.send({ code: 0, msg: "success", data: null });
})

app.get("/person/info", (req, res, next) => {
  let username = req.cookies.username;
  if (username) next();
  else {
    res.send({
      code: -1,
      data: null,
      msg: "查询失败"
    })
  }
}, (req, res) => {
  let username = req.cookies.username;
  let user = users.find(item => item.username == username);
  // unpay = user.cart.filter(item => item.state === 0),
  // pay = user.cart.filter(item => item.state === 1);
  if (user) {
    res.send({
      code: 0,
      data: user,
      // unpay,
      // pay,
      msg: "查询成功"
    })
  } else {
    res.send({
      code: -1,
      data: null,
      msg: "查询失败"
    })
  }
})

app.get("/course/info", (req, res, next) => {
  username = req.cookies.username;
  if (username) next();
  else {
    res.send({
      code: -1,
      data: null,
      msg: "请先登录"
    })
  }
}, (req, res) => {
  let { courseid } = req.query,
    username = req.cookies.username,
    courses = require('./mock/lessons'),
    lessons = JSON.parse(JSON.stringify(courses)),
    course = lessons.find((item) => item.id === parseInt(courseid)),
    user = users.find(item => item.username === username),
    unpay = user.cart.filter(item => item.state === 0),
    pay = user.cart.filter(item => item.state === 1);

  if (course) {
    res.send({
      code: 0,
      data: course,
      unpay,
      pay,
      msg: "Success"
    })
  } else {
    res.send({
      code: -1,
      data: null,
      msg: "fialed"
    })
  }
})

/** 
 * state
 * -1：表示没有加入购物车
 * 0：表示已经加入购物车，但未支付
 * 1：表示已支付
*/

app.post("/course/store/add", (req, res, next) => {
  let username = req.cookies.username
  let user = users.find(item => item.username == username);
  if (username && user) next();
  else
    res.send({
      code: -1,
      msg: "未登录,添加失败"
    });
}, (req, res) => {
  let { courseid } = req.body,
    cs = lessons.find(item => item.id === courseid),
    username = req.cookies.username,
    course = {
      state: 0,
      courseid: null,
      ...cs
    };
  course.courseid = parseInt(courseid);
  cart_user = users.find(item => item.username === username);
  if (cart_user.cart.find(item => (item.courseid === courseid && item.state === 0))) {
    res.send({
      code: -1,
      msg: "已经添加过了"
    })
  } else {
    cart_user.cart.push(course);
    res.send({
      code: 0,
      msg: "添加成功"
    });
  }
});
app.post("/course/store/remove", (req, res, next) => {
  let username = req.cookies.username
  let user = users.find(item => item.username == username);
  if (username && user) next();
  else
    res.send({
      code: -1,
      msg: "未登录,添加失败"
    });
}, (req, res) => {
  let { courseid } = req.body,
    username = req.cookies.username,
    user = users.find(item => item.username == username),
    len = user.cart.length;
  user.cart = user.cart.filter(item => item.courseid !== parseInt(courseid));
  let new_len = user.cart.length;
  new_len !== len ? res.send({
    code: 0,
    msg: "删除成功"
  }) : res.send({
    code: -1,
    msg: "删除失败"
  })
})

app.get("/course/store/info", (req, res, next) => {
  username = req.cookies.username;
  if (username) next();
  else {
    res.send({
      code: -1,
      msg: "未登录"
    })
  }
}, (req, res) => {
  let { state } = req.query,
    username = req.cookies.username,
    user = users.find(item => item.username == username),
    state_lists = user.cart.filter(item => item.state === parseInt(state)),
    unpay = [],
    pay = [];
  if (parseInt(state) === 1) {
    pay = state_lists;
  } else {
    unpay = state_lists;
  }
  res.send({
    unpay,
    pay,
    code: 0,
    msg: "查询成功"
  })
});

app.post("/store/pay", (req, res, next) => {
  username = req.cookies.username;
  if (username) next();
  else {
    res.send({
      code: -1,
      msg: "未登录"
    })
  }
}, (req, res) => {
  let { id } = req.body,
    username = req.cookies.username,
    user = users.find(item => item.username == username),
    course = user.cart.find(item => item.id === parseInt(id));
  console.log(id)
  course.state = 1;
  res.send({
    code: 0,
    msg: "支付成功"
  })


})

app.listen(3001);