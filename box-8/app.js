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


app.get("/",(req,res,next)=>{
   for(let i=0;i<10;i++){

        if(i===3){
            console.log("flag")
            res.send("flag")
            // for文内でreturnすると元の関数ごと終了する
            // forEachは関数だからreturnしても終了するのはその関数だけで元の関数は止まらないと考えられる
            return
        }

        console.log(i)
    }

    //

},(req,res)=>{
    res.send("呼ばれるはずがない命令")
})

//　ポート番号3001番で起動
app.listen(3001);
//一応Logにローカルホストのアドレスを表示させておく
console.log("http://localhost:3001/")