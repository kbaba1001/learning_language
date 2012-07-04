# define_methodが何のためにあるのか『７つの言語７つの世界』ではわかりにくかったので調べて出てきたサンプルコード。
# @see http://www.func09.com/wordpress/archives/373

class DynamicMethod
  # my_method_1, my_method_2というメソッドを定義する
  [1,2].each do |num|
    define_method("my_method_#{num}") do |message| # 引数message
      puts "My method #{num}:#{message} "
    end
  end
end

dm = DynamicMethod.new
p dm.methods.select{|i| i=~/my_method/} # => ["my_method_1", "my_method_2"]

dm.my_method_1 "hello"    # => My method 1:hello
dm.my_method_2 "good-bye" # => My method 2:good-by