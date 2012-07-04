『テスト駆動JavaScript』の写経
==============
『テスト駆動JavaScript』を元にJavaScriptの勉強をします。

## Chapter01 自動テスト
### 疑問に思ったこと
[strftime.js](chapter01/strftime.js)を作っているときに

    Date.prototype.strftime = (function() {
      //...中身は中略
    };

としていてうまく動かなかった。正しくは次のように最後に()を付ける。

    Date.prototype.strftime = (function() {
      //...中身は中略
    }());

この違いって何？