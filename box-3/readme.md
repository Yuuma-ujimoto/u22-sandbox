## ボタンで送信先を分けるフォーム

最初jsでonsubmit時に関数呼んでformタグ書き換えようと思ったけど 調べてみると

formaction属性というので送信先URLを制御可能らしい。

サンプルコード

```angular2html

<form method="post">
    
    <!--input省略-->
    
    <!--/post1というURLに送信-->
    <button type="submit" formaction="/post1">送信1</button>
    <!--/post2というURLに送信-->
    <button type="submit" formaction="/post2">送信2</button>
</form> 
```
