セルフスタディ3日目
=========
## 試してみよう
### 問
eachメソッドがCsvRowオブジェクトを返すように、CSVアプリケーションを変更せよ。
そのCsvRowのmethod_missingをつかって、与えられた見出しの列の値を返すようにせよ。
例えば、次のようなファイルがあるとする。

    one, two
    lions, tigers

このとき、つぎのようなAPIが使えるようにせよ

    csv = RubyCsv.new
    csv.each {|row| puts row.one}

この出力結果は'lions'となる

### 解答
[作成したコード](ruby_csv.rb)