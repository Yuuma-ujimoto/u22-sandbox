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


// POSTのデータを送る処理に関して諸々の確認
app.get("/", (req, res) => {
    res.render("index")
})

app.post("/a",
    (req, res) => {
        console.log("a")
        console.log(req.body)
        // POSTのデータを保持したままリダイレクト
        res.redirect(307, "b")
    })

app.post("/b",
    (req, res) => {
        console.log("b")
        console.log(req.body)
        // リダイレクト先から特定のページにPOSTでアクセスしたらそのままPOSTのデータもついてくるかと思ったそうじゃなかったパターン
        res.render("index2",{post:req.body})
    })

app.post("/c",
    (req, res) => {
        console.log("c")
        console.log(req.body)
        res.send("c")
    })

//　ポート番号3000番で起動
app.listen(3000);
//一応Logにローカルホストのアドレスを表示させておく
console.log("http://localhost:3000/")
