// 複数のメニューが送信される前提でデータを配列として扱っていたが
// メニューが一つだけの場合バグるので処理をなるべく変えない様に修正するために
// 値が配列以外の値の時に配列としてのデータに加工する関数を作成した。

const set_data = (data)=>{
    //console.log(data)
    if(typeof data=="object"){
        return data
    }
    return [data]
}


console.log(set_data(1))
console.log(set_data([1,2]))
console.log([null])
