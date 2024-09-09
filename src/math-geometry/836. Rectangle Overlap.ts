function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  const [rect1, rect2] = [new Rectangle(rec1), new Rectangle(rec2)];
  const [xOverlap, yOverlap] = [
    Math.min(rect1.x2, rect2.x2) - Math.max(rect1.x1, rect2.x1),
    Math.min(rect1.y2, rect2.y2) - Math.max(rect1.y1, rect2.y1),
  ];
  return xOverlap > 0 && yOverlap > 0;
}

class Rectangle {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  constructor([x1, y1, x2, y2]: number[]) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
  }
}
