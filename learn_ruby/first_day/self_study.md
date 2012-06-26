セルフスタディ1日目
====================

## P.17「探してみよう」より
### Ruby API
* [Ruby1.9.3のAPIリファレンス(英語)](http://www.ruby-doc.org/core-1.9.3/)
* [オブジェクト指向スクリプト言語 Ruby リファレンスマニュアル](http://doc.ruby-lang.org/ja/1.9.3/doc/index.html)
* [逆引きRuby](http://www.namaraii.com/rubytips/)

### Programming Ruby
* [Programming Ruby オンライン版（英語）](http://www.ruby-doc.org/docs/ProgrammingRuby/)
* [Programming Ruby 1.9 書籍版（日本語訳）](http://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0Ruby-%E2%88%92%E8%A8%80%E8%AA%9E%E7%B7%A8%E2%88%92-Dave-Thomas-Fowler/dp/4274068099/ref=pd_sxp_f_pt)

ついでにRailsについて
* [Ruby on Rails Tutorial](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book?version=3.2)
* [RailsによるアジャイルWebアプリケーション開発 第4版](http://www.amazon.co.jp/Rails%E3%81%AB%E3%82%88%E3%82%8B%E3%82%A2%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%ABWeb%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-%E7%AC%AC4%E7%89%88-Sam-Ruby/dp/4274068668/ref=pd_sim_b_5)

### 文字列を置換するメソッド
[逆引きRuby - 文字列中で指定したパターンにマッチする部分を置換する](http://www.namaraii.com/rubytips/?%CA%B8%BB%FA%CE%F3#l23)

    s = "Apple Banana Apple Orange"

    s.sub("Apple", "Pine")
      #=> "Pine Banana Apple Orange"
    s.gsub("Apple", "Pine")
      #=> "Pine Banana Pine Orange"

### Rubyの正規表現に関する情報
* [日本語版リファレンスの正規表現の項目](http://doc.ruby-lang.org/ja/1.9.3/doc/spec=2fregexp.html)
* [Rubular](http://www.rubular.com/) 正規表現にマッチするかどうか試せるサイト

## 試してみよう

### Hello World  始まりの言葉

    puts 'Hello World'

### "Hello Ruby"の"Ruby"という単語のインデックスを検索する

    hr =  'Hello Ruby'
    hr.index('Ruby')

### 10回自分の名前を表示

    10.times{ puts 'kbaba1001' }

### "This is sentence number 1"の1を10までカウントアップしながら10回出力する。

    10.times{ |i| puts "This is sentence number #{i+1}"  }
    1.upto(10){ |i| puts "This is sentence number #{i}"  }
    1.step(10,1){ |i| puts "This is sentence number #{i}"  }
    (1..10).each{ |i| puts "This is sentence number #{i}"  }

上記の4つは同じ結果になる。

### ファイルに格納されているRubyプログラムを実行する。

（省略）

### 乱数を発生し、プレイヤーに数字を選択してもらい、その数字が生成された乱数よりも大きいか小さいかを返す。

  [submit_rand.rb](submit_rand.rb)を見よ。