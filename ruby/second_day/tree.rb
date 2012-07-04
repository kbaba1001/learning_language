class Tree
  attr_accessor :node_name, :children

  # 3日真剣に考えたがわからんかったorz
  # カンニングしたorz
  # injectときたか……
  # http://johtani.jugem.jp/?eid=25
  def initialize(node={})
    node.each do |key, value|
      @node_name = key
      @children = value.inject([]) do |array, (k, v)|
        [Tree.new({ k => v })] + array
      end
    end
  end

  def visit_all(&block)
    visit &block
    @children.each {|c| c.visit_all &block}
  end

  def visit(&block)
    block.call self
  end
end

ruby_tree = Tree.new({'grandpa' => {'dad' => {'child 1' => [], 'child 2' => []}, 'uncle' => {'child 3' => [], 'child 4' => []}}})

puts "Visiting a node"
ruby_tree.visit {|node| p node.node_name}
puts

puts "Visiting entire tree"
ruby_tree.visit_all {|node| p node.node_name}