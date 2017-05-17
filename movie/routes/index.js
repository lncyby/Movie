var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页');
});

//detail
router.get('/detail',function(req,res){
  res.render('detail',{title:"详情页"})
})

// admin
router.get('/admin',function(req,res){
  res.render('admin',{title:"后台录入页"})
})

// list
router.get('/list',function(req,res){
  res.render('list',{title:"列表页"})
})

module.exports = router;
