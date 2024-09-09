import { MinPriorityQueue } from "@datastructures-js/priority-queue";

export function dijkstras(
  n: number,
  edges: number[][],
  startVertex: number,
  oneIndexed?: boolean
): Map<number, number> {
  const [shortestDistances, graph, visited, priorityQueue]: [
    Map<number, number>,
    number[][][],
    Set<number>,
    MinPriorityQueue<[number, number]>
  ] = [
    getShortestDistances(n, oneIndexed ? startVertex - 1 : startVertex),
    getAdjList(n, edges, oneIndexed),
    new Set<number>(),
    new MinPriorityQueue<[number, number]>({
      priority: (el) => el[1],
    }),
  ];
  priorityQueue.enqueue([oneIndexed ? startVertex - 1 : startVertex, 0]);
  while (priorityQueue.size() > 0) {
    const {
      element: [curVertex, curDist],
    } = priorityQueue.dequeue();
    visited.add(curVertex);
    for (const [nextVertex, distance] of graph[curVertex]) {
      if (
        visited.has(nextVertex) ||
        shortestDistances.get(nextVertex)! < curDist + distance
      ) {
        continue;
      }
      priorityQueue.enqueue([nextVertex, curDist + distance]);
      shortestDistances.set(nextVertex, distance + curDist);
    }
  }
  return shortestDistances;
}

function getShortestDistances(
  n: number,
  startVertex: number
): Map<number, number> {
  const shortestDistances = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    shortestDistances.set(i, i === startVertex ? 0 : Infinity);
  }
  return shortestDistances;
}

function getAdjList(
  n: number,
  edges: number[][],
  oneIndexed: boolean = false
): number[][][] {
  const graph: number[][][] = new Array(n).fill([]).map(() => []);
  for (const [src, dest, weight] of edges) {
    graph[oneIndexed ? src - 1 : src].push([
      oneIndexed ? dest - 1 : dest,
      weight,
    ]);
  }
  return graph;
}
