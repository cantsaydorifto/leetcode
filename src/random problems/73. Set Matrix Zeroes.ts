export function setZeroes(matrix: number[][]): void {
  const zeroRows: Set<number> = new Set();
  const zeroCol: Set<number> = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCol.add(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (zeroRows.has(i) || zeroCol.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}
