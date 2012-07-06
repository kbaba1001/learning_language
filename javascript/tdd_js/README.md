『テスト駆動JavaScript』の写経
==============
『テスト駆動JavaScript』を元にJavaScriptの勉強をします。

## Chapter01 自動テスト
### 疑問に思ったこと
[strftime.js](chapter01/strftime.js)を作っているときに

    Date.prototype.strftime = (function() {
      //...中身は中略
    });

としていてうまく動かなかった。正しくは次のように最後に()を付ける。

    Date.prototype.strftime = (function() {
      //...中身は中略
    }());

この違いって何？

## Chapter03 現役で使われているツール
Chapter03以降ではJsTestDriverによる自動テストを行う。

JsTestDriverを直接コマンドラインで使うのは億劫なので[Jstduilt](http://cjohansen.no/en/javascript/jstdutil_a_ruby_wrapper_over_jstestdriver)をインストールした。これで簡単なコマンドでテストを実行できる。

