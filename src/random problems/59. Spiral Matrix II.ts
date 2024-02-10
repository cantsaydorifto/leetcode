export function generateMatrix(n: number): number[][] {
  const matrix = new Array(n).fill([]).map((el) => new Array(n).fill(0));
  let [left, right, top, bottom, cnt] = [
    0,
    matrix[0].length - 1,
    0,
    matrix.length - 1,
    1,
  ];
  while (top <= bottom && left <= right) {
    for (let i = left; i < right + 1; i++) {
      matrix[top][i] = cnt;
      cnt++;
    }
    top++;
    if (top > bottom) break;
    for (let i = top; i < bottom + 1; i++) {
      matrix[i][right] = cnt;
      cnt++;
    }
    right--;
    if (right < left) break;
    for (let i = right; i > left - 1; i--) {
      matrix[bottom][i] = cnt;
      cnt++;
    }
    bottom--;
    for (let i = bottom; i > top - 1; i--) {
      matrix[i][left] = cnt;
      cnt++;
    }
    left++;
  }
  return matrix;
}
