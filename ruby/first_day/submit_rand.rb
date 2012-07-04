# coding: utf-8

puts('乱数の下限を入力して下さい(Integer)')
under = STDIN.gets.to_i

puts('乱数の上限を入力して下さい(Integer)')
upper = STDIN.gets.to_i

print('乱数： ')
puts rand_number = rand( upper - under ) + under

puts('比較したい数値を入力して下さい(Integer)')

case (STDIN.gets.to_i <=> rand_number.to_i)
when 1
  puts '入力した数値のほうが大きいです。'
when 0
  puts '入力した数値と等しいです。'
when -1
  puts '入力した数値のほうが小さいです。'
else
  puts 'わけがわからないよ'
end