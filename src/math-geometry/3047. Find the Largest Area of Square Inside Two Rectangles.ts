function largestSquareArea(
  bottomLeft: number[][],
  topRight: number[][]
): number {
  let res = 0;
  for (let i = 0; i < bottomLeft.length; i++) {
    for (let j = i + 1; j < bottomLeft.length; j++) {
      res = Math.max(
        res,
        minOverlap(
          bottomLeft[i][0],
          bottomLeft[i][1],
          topRight[i][0],
          topRight[i][1],
          bottomLeft[j][0],
          bottomLeft[j][1],
          topRight[j][0],
          topRight[j][1]
        )
      );
    }
  }
  return res * res;
}

function minOverlap(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  const [xOverlap, yOverlap] = [
    Math.min(bx2, ax2) - Math.max(bx1, ax1),
    Math.min(by2, ay2) - Math.max(by1, ay1),
  ];
  if (xOverlap > 0 && yOverlap > 0) {
    return Math.min(xOverlap, yOverlap);
  }
  return 0;
}
