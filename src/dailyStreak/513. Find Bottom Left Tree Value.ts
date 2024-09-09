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

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) return 0;
  const res: number[][] = [];
  const q = [root];

  while (q.length > 0) {
    const queueLen = q.length;
    const levelElements = [];
    for (let i = 0; i < queueLen; i++) {
      const el = q.shift();
      if (el && el.left) q.push(el.left);
      if (el && el.right) q.push(el.right);
      if (el) levelElements.push(el.val);
    }
    res.push(levelElements);
  }
  return res[res.length - 1][0];
}
