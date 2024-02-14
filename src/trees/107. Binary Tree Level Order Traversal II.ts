class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrderBottom(root: TreeNode | null): number[][] {
  const q = [root];
  const res = [];
  if (!root) return [];
  while (q.length > 0) {
    const qLen = q.length;
    const levelNodes = [];
    for (let i = 0; i < qLen; i++) {
      const node = q.pop()!;
      levelNodes.push(node.val);
      if (node.left) q.unshift(node.left);
      if (node.right) q.unshift(node.right);
    }
    res.unshift(levelNodes);
  }
  return res;
}
