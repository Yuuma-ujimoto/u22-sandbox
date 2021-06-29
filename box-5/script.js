

// front側で作成したlist型のデータをinputにねじ込んで送信すると得られるデータ型はStringになる
// [aaa,bbb]というデータを送った結果↓
const data = "aaa,bbb"
// aaa,bbbは,で区切られているのでsplitで配列化しforEachでそのまま値を一つづつ取り出せる
data.split(",").forEach(i=>{
    console.log(i)
})


// コレでエラー出ると思って書いてたんだけど出ませんでした
// 最初split周りでエラー出てたから存在しない文字で区切ったらエラー出るもんだと思ってたけどそんなことはなかった
const data2 = 'true'
data2.split(",").forEach(i=>{
    console.log(i)
})


// 文字列を真偽値の配列に変換
//
const data3 = "true,false,true"

const data3_to_bool_array = []
data3.split(",").forEach(i=>{
  data3_to_bool_array.push(i==="true")
})

console.log(data3_to_bool_array)