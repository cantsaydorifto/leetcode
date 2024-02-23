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

function flatten(root: TreeNode | null): void {
  let nextNode: TreeNode | null = null;
  postOrder(root);
  function postOrder(node: TreeNode | null) {
    if (!node) return;
    postOrder(node.right);
    postOrder(node.left);
    node.right = nextNode;
    node.left = null;
    nextNode = node;
  }
}

function flattenAlt(root: TreeNode | null): void {
  const res: TreeNode[] = [];
  preorder(root, res);
  res.forEach((el, idx) => {
    el.left = null;
    el.right = idx + 1 >= res.length ? null : res[idx + 1];
  });
}

function preorder(root: TreeNode | null, res: TreeNode[]) {
  if (!root) return;
  res.push(root);
  preorder(root.left, res);
  preorder(root.right, res);
}
