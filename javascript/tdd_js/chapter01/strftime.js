Date.prototype.strftime = (function() {
  function strftime(format) {
    var date = this;

    return (format + "").replace(/%([a-zA-Z])/g,

    function(m, f) {
      var formatter = Date.formats && Date.formats[f];

      if (typeof formatter == "function") {
        return formatter.call(Date.formats, date);
      } else if (typeof formatter == "string") {
        return date.strftime(formatter);
      }

      return f;
    });
  }

  //内部ヘルパー
  function zeroPad(num) {
    return (+num < 10 ? "0" : "") + num;
  }

  Date.formats = {
    d: function(date) {
      return zeroPad(date.getDate());
    }

    ,m: function(date) {
      // 本の通りに書いてるけど、なんで+1するんだろう？
      // これだと入力した月の次の月が表示されて違和感があるんだが。
      // ノルウェイ(作者の国)だとこういうものなのかな？
      return zeroPad(date.getMonth() + 1);
    }

    ,y: function(date) {
      return zeroPad(date.getYear() % 100);
    }

    ,Y: function(date) {
      return date.getFullYear();
    }

    ,j: function(date) {
      var janl = new Date(date.getFullYear(), 0, 1);
      var diff = date.getTime() - janl.getTime();

      return Math.ceil(diff / 86400000);
    }

    //フォーマット略記法
    ,F: "%Y-%m-%d"
    ,D: "%m/%d/%y"
  };

  return strftime;
}());