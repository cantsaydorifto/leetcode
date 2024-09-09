/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isEvenOddTree(root: TreeNode | null): boolean {
  if (!root) return true;
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

  for (let j = 0; j < res.length; j++) {
    for (let i = 1; i < res[j].length; i++) {
      if (i % 2 === 0) {
        if (res[i - 1] >= res[i]) return false;
      }
      if (i % 2 !== 0 && i !== 0) {
        if (res[i - 1] <= res[i]) return false;
      }
    }
  }
}
