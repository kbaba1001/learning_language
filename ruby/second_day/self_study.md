セルフスタディ2日目
===============

## 探してみよう
### コードブロックを使った場合と使わない場合の両方について、ファイルアクセスするコードを書く。コードブロックの利点は
まず、コードブロックを使わない場合：

    file = File.open('README.md')
    while (line = file.gets)
      p line
    end
    file.close

次に、コードブロックを使う場合：

    File.open('README.md').each { |line| p line }

コードブロックを使う利点：
* 行数が少ない
* closeを忘れる心配がない
* 手続き型風のコードより読みやすい
* Enumerableのメソッドがそのまま使える。例えば、空行を読み込みたくないなら`File.open('README.md').select { |line| /\S/ =~ line }`でよい。

### ハッシュを配列に変換するにはどうすればよいか? また、逆に配列をハッシュに変換する方法は?
ハッシュを配列に：

    h = {one: 1, two: 2, three: 3}
    h.to_a
      #=> [[:one, 1], [:two, 2], [:three, 3]]

配列をハッシュに：

    # 自分で考えた方法
    a = [10, 20, 30, 40]
    h = Hash.new
    a.size.times { |i| h[i] = a[i] }

[配列からハッシュを作成する](http://www.rubylife.jp/ini/hash_class/index7.html)で紹介されている方法

１次元配列から作成する：

    ary = ["suzuki", 87, "itou", 76, "yamada", 69]
    h = Hash[*ary]

２次元配列から作成する：

    ary = [["suzuki", 87], ["itou", 76], ["yamada", 69]]
    h = Hash[*ary.flatten]

キーと値がバラバラな場合：

    keyAry = ["suzuki", "itou", "yamada"]
    keyValue = [87, 76, 69]
    ary = [keyAry,keyValue].transpose
    h = Hash[*ary.flatten]

配列名の前にアスタリスクをつけると多重代入が実行されるらしい。正直良くわからん。

### ハッシュの各要素について繰り返すにはどうすればよいか?

    h = {one: 1, two: 2, three: 3}
    h.each{ |i| p i }

でいいのか……?  問題の意味がよくわからなかった。

### Rubyの配列はスタックとしても使える。スタック以外に、配列で実現可能なよくあるデータ構造体をあげよ

スタック

    a = []        #=> []
    a.push(1)     #=> [1]
    a.push(2)     #=> [1, 2]
    a.push(3)     #=> [1, 2, 3]
    a.last        #=> 3:  peekメソッドがないのでlastを使う。
    a.pop         #=> 3:  [1, 2]
    a.pop         #=> 2:  [1]
    a.pop         #=> 1:  []

リスト

    a = [1, 2, 3, 4]
    a.insert(1, 'a')    #=> [1, "a", 2, 3, 4]
    a[1, 0] = ['b']     #=> [1, "b", "a", 2, 3, 4]
    a.delete_at(2)      #=> [1, "b", 2, 3, 4]
    a.delete('b')       #=> [1, 2, 3, 4]

キュー

    a = []    #=> []
    a << 1    #=> [1]: <<ではなくpushでもいい
    a << 2    #=> [1, 2]
    a << 3    #=> [1, 2, 3]
    a.first   #=> 1:  peekがないのでfirstを使う
    a.shift   #=> [2, 3]: slice!(0)でもいい
    a.shift   #=> [3]
    a.shift   #=> []

セット(集合)

    [1, 2, 3] & [2, 3, 4]   #=> [2, 3]: 積集合
    [1, 2, 3] | [2, 3, 4]   #=> [1, 2, 3, 4]: 和集合
    [1, 2, 3] - [2, 3, 4]   #=> [1]: 差集合

1から100までの乱数(Ruby 1.9)

    Array.new(100){ |x| x+1 }.sample


## 試してみよう
### 最初にeachだけを用いて16個の数値と4個の数値の配列の中身を同時に出力せよ。次に、同じ事をEnumerableのeach_sliceを用いて実行せよ。
問題の日本語がよくわからないorz each_sliceは引数で指定した個数ずつ要素を配列として取り出す事ができるので

    a = Array.new(16){ |x| x+1 }
    a.each_slice(4){ |x| p x }
      #=>[1, 2, 3, 4]
         [5, 6, 7, 8]
         [9, 10, 11, 12]
         [13, 14, 15, 16]

となる。ここではこれをeachで表現することにする。

    i = 0
    a.each do |x|
      print '[' if i % 4 == 0
      print x.to_s
      print i % 4 == 3 ? "]\n" : ', '
      i += 1
    end

こんな感じか？ 表示するときの見かけを揃えているだけで、実際に４個の配列を作っているわけではないけど。

### Treeクラス(P24)の改良
次のツリークラスを改良して、`Tree.new({'grandpa' => {'dad' => {'child 1' => [], 'child 2' => []}, 'uncle' => {'child 3' => [], 'child 4' => []}}})`のようなツリーを指定できるようにせよ。

    class Tree
      attr_accessor :children, :node_name

      def initialize(name, children=[])
        @children = children
        @node_name = name
      end

      def visit_all(&block)
        visit &block
        @children.each {|c| c.visit_all &block}
      end

      def visit(&block)
        block.call self
      end
    end

    ruby_tree = Tree.new('Ruby', [Tree.new('Reia'), Tree.new('MacRuby')])

    puts 'Visiting a node'
    ruby_tree.visit {|node| puts node.node_name }
    puts

    puts 'Visitin a node'
    ruby_tree.visit_all {|node| puts node.node_name}

これ難しかった。解けなかったのでカンニングした。完全敗北や・・・。

[作成したtree.rb](tree.rb)


#### 補足：コードブロックとyieldについて

yieldを使うとコードブロックの|変数|に値を渡すことが出来る。
次のコードでは`yield i`で`{|x| ...}`のxにiの値を渡している。 

    def aaa(n)
      i = 0
      while(i < n)
        yield i
        i += 1
      end  
    end

    aaa(5){|x| print "#{x}, " }
      #=> 0, 1, 2, 3, 4, 


### grepコマンドを自作せよ。簡単な正規表現でマッチングを行いファイルから行を読み出す必要がある。必要なら行番号も出力してみると良い。

単なるgrepなら

    puts open(ARGV[1]).select{ |line| /#{ARGV[0]}/ =~ line }

でよさそう。
行数を出すとしたら、

    i = 0
    open(ARGV[1]).each do |line|
      if /#{ARGV[0]}/ =~ line
        puts "#{i}: #{line}"
      end
      i += 1
    end

かな。冗長な気がする。配列のコードブロック中で添字の値を取得することってできないのかな？


## 参考資料
* [プログラミング言語 Ruby](http://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E-Ruby-%E3%81%BE%E3%81%A4%E3%82%82%E3%81%A8-%E3%82%86%E3%81%8D%E3%81%B2%E3%82%8D/dp/4873113946/ref=sr_1_1?ie=UTF8&qid=1339513647&sr=8-1)
