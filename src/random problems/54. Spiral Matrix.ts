export function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  let [left, right, top, bottom] = [
    0,
    matrix[0].length - 1,
    0,
    matrix.length - 1,
  ];
  while (top <= bottom && left <= right) {
    for (let i = left; i < right + 1; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    if (top > bottom) break;
    for (let i = top; i < bottom + 1; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (right < left) break;
    for (let i = right; i > left - 1; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i > top - 1; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
}
