export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const q: number[][] = [[sr, sc]];
  const vectors = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const initialVal = image[sr][sc];

  if (initialVal === color) {
    return image;
  }

  while (q.length > 0) {
    const [i, j] = q.shift()!;
    for (const [dc, dr] of vectors) {
      if (
        i + dc < image.length &&
        i + dc >= 0 &&
        j + dr < image[0].length &&
        j + dr >= 0 &&
        image[i + dc][j + dr] === initialVal
      ) {
        q.push([i + dc, j + dr]);
      }
    }
    image[i][j] = color;
  }
  return image;
}
