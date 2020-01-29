var cloneGraph = function(graph) {
  if (graph == null) return graph;
  let map = {};
  const clone = function (node) {
    if (!map[node.val]) {
      let newNode = new Node(node.val);
      map[node.val] = newNode;
      newNode.neighbors = node.neighbors.map((n) => clone(n));
    }
    return map[node.val];
  }
  return clone(graph);
};
