function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  const [xOverlap, yOverlap, rect1Area, rect2Area] = [
    Math.min(bx2, ax2) - Math.max(bx1, ax1),
    Math.min(by2, ay2) - Math.max(by1, ay1),
    (ax2 - ax1) * (ay2 - ay1),
    (bx2 - bx1) * (by2 - by1),
  ];
  let overlapArea = 0;
  if (xOverlap > 0 && yOverlap > 0) overlapArea = xOverlap * yOverlap;
  return rect1Area + rect2Area - overlapArea;
}
