require 'csv'

class CsvRow
  def initialize(column)
    @column = column
  end

  def method_missing name, *args
    @column[name.to_s]
  end
end

class RubyCsv
  attr_reader :headers, :contents

  def initialize(filename)
    csv = CSV.readlines(filename)
    @headers = csv.shift
    @contents = csv
  end

  include Enumerable
  def each(&block)
    @contents.each do |tuple|
      ary_row = [headers, tuple].transpose
      block.call CsvRow.new(Hash[*ary_row.flatten])
    end
  end
end

csv = RubyCsv.new('user.csv')
##### user.csvの内容
# name,age,gender
# jon,16,man
# smith,30,man
# miller,20,woman

csv.each {|row| puts row.name} #=> jon smith miller
csv.each {|row| puts row.age}  #=> 16 30 20
