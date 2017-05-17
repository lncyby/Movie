var express = require('express')
var prot = process.env.PORT || 3000
var app = express()

app.set('views','./views')
app.set('view engine', 'ejs')
app.listen(prot)

console.log('连接端口' + prot);

//index
app.get('/',function(req,res){
  res.render('index',{title:"首页"})
})

//detail
app.get('/detail',function(req,res){
  res.render('detail',{title:"详情页"})
})

// admin
app.get('/admin',function(req,res){
  res.render('admin',{title:"后台录入页"})
})

// list
app.get('/list',function(req,res){
  res.render('list',{title:"列表页"})
})
