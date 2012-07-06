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
  for (var test in tests) {
    if (!/^test/.test(test)) {
      continue;
    }

    testCount++;

    try {
      tests[test]();
      output(test, "#00cc00");
      successful++;
    } catch (e) {
      output(test + " failded: " + e.message, "#cc0000");
    }
  }

  var color = successful == testCount ? "#00cc00" : "#cc0000";
  output("<strong> + testCount" + " tests,  " +
    (testCount - successful) + " failures</strong>", color);
}