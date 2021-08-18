//諸々のPackage読み込み
const express = require("express")
const path = require("path")
const cookieParser = require('cookie-parser');

const mysql = require("mysql2")
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:"3306",
    database:"u22"
})
//app init
const app = express()

// appの各種設定
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('/public'));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(cookieParser());


// foreEach内でreturnしても元の関数が終了するわけではない
app.get("/",(req,res,next)=>{
    const list = [1,2,3,4,5,6]
    let forEach_end_flag = false
    list.forEach(i=>{
        if(forEach_end_flag){return}

        connection.query("select * from a",(err, result) => {
            if(err){
                res.send("err")
                forEach_end_flag = true
                return
            }
            console.log(result)
        })
        console.log(i)
    })
    if(forEach_end_flag){
        res.send("end")
        return
    }
    //　この状態だとnextも実行されないはず
    // 検証結果->思ってた通り処理が正常に終わった
    next()

},(req,res)=>{
    res.send("呼ばれるはずがない命令")
})

//　ポート番号3001番で起動
app.listen(3001);
//一応Logにローカルホストのアドレスを表示させておく
console.log("http://localhost:3001/")