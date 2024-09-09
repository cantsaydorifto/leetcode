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

function diameterOfBinaryTree(root: TreeNode | null): number {
  const maxVal = [0];
  dfs(root, maxVal);
  return maxVal[0];
}

function dfs(root: TreeNode | null, maxVal: number[]): number {
  if (!root) return 0;
  const [leftVal, rightVal] = [dfs(root.left, maxVal), dfs(root.right, maxVal)];
  maxVal[0] = Math.max(maxVal[0], leftVal + rightVal);
  return 1 + Math.max(leftVal, rightVal);
}
