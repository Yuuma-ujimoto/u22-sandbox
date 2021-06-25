//諸々のPackage読み込み
const express = require("express")
const path = require("path")
const cookieParser = require('cookie-parser');


//app init
const app = express()

// appの各種設定
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('/public'));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(cookieParser());

app.get("/",(req, res) => {
    res.render("index")
})

app.post("/post",(req, res) => {
    //console.log(req.body)
//    res.redirect("/post")
    res.redirect(307,"/test")
})

app.get("/post",(req, res) => {
    res.send("b")
})

app.post("/test",(req, res) => {
    console.log(req.body)
    res.send("c")
})

//　ポート番号3000番で起動
app.listen(3000);
//一応Logにローカルホストのアドレスを表示させておく
console.log("http://localhost:3000/")