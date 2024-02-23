import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number
): number {
  const maxHeap = new MaxPriorityQueue<number>();
  for (let i = 0; i < heights.length; i++) {
    const jump = heights[i + 1] - heights[i];
    if (jump <= 0) continue;
    bricks -= jump;
    maxHeap.enqueue(jump);
    if (bricks < 0) {
      if (ladders === 0) return i;
      ladders--;
      bricks += maxHeap.dequeue();
    }
  }
  return heights.length - 1;
}
