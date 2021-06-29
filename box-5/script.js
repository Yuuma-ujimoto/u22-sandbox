
// front側で作成したlist型のデータをinputにねじ込んで送信すると得られるデータ型はStringになる
// [aaa,bbb]というデータを送った結果↓
const data = "aaa,bbb"
// aaa,bbbは,で区切られているのでsplitで配列化しforEachでそのまま値を一つづつ取り出せる
data.split(",").forEach(i=>{
    console.log(i)
})


const data2 = 'true'

data2.split(",").forEach(i=>{
    console.log(i)
})