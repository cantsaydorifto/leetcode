export function rotate(matrix: number[][]): void {
  reverseMatrixRows(matrix);
  transposeMatrix(matrix);
}

function transposeMatrix(matrix: number[][]) {
  const N = matrix.length;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

function reverseMatrixRows(matrix: number[][]) {
  const N = matrix.length;
  let l = 0;
  let r = N - 1;
  while (l < r) {
    [matrix[l], matrix[r]] = [matrix[r], matrix[l]];
    l++;
    r--;
  }
}
