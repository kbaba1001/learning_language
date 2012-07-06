// Array#spliceが破壊的かどうかを調べるテスト。
TestCase("ArrayTest", {
  "test array splice should not modify array": function () {
    var arr = [1, 2, 3, 4, 5];
    var result = arr.splice(2, 3);

    assertEquals([1, 2], arr);
  }

  ,"test array splice should return modified array": function () {
    var arr = [1, 2, 3, 4, 5];
    var result = arr.splice(2, 3);

    assertEquals([3, 4, 5], result);

    // printするにはconsole.logを使うと便利。
    // $ jstestdriver --tests all --captureConsole
    // コマンドを使うとターミナルでもlogを見ることが出来る
    console.log(result)
  }
});