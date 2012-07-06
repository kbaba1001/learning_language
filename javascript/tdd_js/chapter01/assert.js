function output (text, color) {
  var p = document.createElement("p");
  p.innerHTML = text;
  p.style.color = color;
  document.body.appendChild(p);
}

function assert(message, expr) {
  if (!expr) {
    throw new Error(message);
  }

  assert.count++;

  return true;
}
assert.count = 0;

function testCase (name, tests) {
  assert.count = 0;
  var successful = 0;
  var testCount = 0;
  var hasSetup = typeof tests.setUp == "function";
  var hasTeardown = typeof tests.tearDown == "function";
  for (var test in tests) {
    if (!/^test/.test(test)) {
      continue;
    }

    testCount++;

    try {
      if (hasSetup) {
        tests.setUp();
      }
      tests[test]();
      output(test, "#00cc00");

      if (hasTeardown) {
        tests.tearDown();
      }

      // tearDownメソッドがエラーを投げたらテスト不合格と考えられる
      // その場合はここは実行されないので合格の回数に入らない
      successful++;
    } catch (e) {
      output(test + " failded: " + e.message, "#cc0000");
    }
  }
  var color = successful == testCount ? "#00cc00" : "#cc0000";
  output("<strong>" + testCount + " tests,  " +
    (testCount - successful) + " failures</strong>", color);
}