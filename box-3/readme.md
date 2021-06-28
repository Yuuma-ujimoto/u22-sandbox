## ボタンで送信先を分けるフォーム

最初jsでonsubmit時に関数呼んでformタグ書き換えようと思ったけど
調べてみると
```angular2html
 <button type="submit" formaction="/post1">送信1</button> 
 <button type="submit" formaction="/post2">送信2</button> 
```
formaction属性というので送信先URLを制御可能らしい。
