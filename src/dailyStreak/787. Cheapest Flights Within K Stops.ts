interface DestinationNode {
  weight: number;
  dest: number;
}

export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const adjList: DestinationNode[][] = Array(n)
    .fill([])
    .map(() => []);
  for (const [srcEl, destEl, weight] of flights) {
    adjList[srcEl].push({ dest: destEl, weight });
  }
  const q: DestinationNode[] = [];
  q.push({ dest: src, weight: 0 });
  const minCost: number[] = Array(n).fill(10001 * n);
  let stopCnt = 0;
  while (q.length > 0 && stopCnt++ <= k) {
    let qLen = q.length;
    while (qLen--) {
      const element = q.pop()!;
      for (const neighbour of adjList[element.dest]) {
        if (element.weight + neighbour.weight < minCost[neighbour.dest]) {
          minCost[neighbour.dest] = element.weight + neighbour.weight;
          q.unshift({ dest: neighbour.dest, weight: minCost[neighbour.dest] });
        }
      }
    }
  }
  return minCost[dst] === 10001 ? -1 : minCost[dst];
}

function getSinglePathCost(
  n: number,
  wieghtedGraph: number[][],
  src: number,
  dst: number
): number {
  const adjList: DestinationNode[][] = Array(n)
    .fill([])
    .map((el) => []);
  for (const [srcEl, destEl, weight] of wieghtedGraph) {
    adjList[srcEl].push({ dest: destEl, weight });
  }
  console.log(adjList);
  const q: DestinationNode[] = [];
  for (let i = 0; i < n; i++) {
    if (i !== src) continue;
    let cost = 0;
    console.log("STARTING FROM : ", i);
    const visited: number[] = Array(n).fill(0);
    q.unshift({ dest: i, weight: 0 });
    while (q.length > 0) {
      const element = q.pop()!;
      if (element.dest === dst) {
        console.log(element);
        cost += element.weight;
        break;
      }
      if (visited[element.dest]) continue;
      console.log(element);
      visited[element.dest] = 1;
      cost += element.weight;
      for (const neighbour of adjList[element.dest]) {
        if (visited[neighbour.dest] === 0) {
          q.unshift({ dest: neighbour.dest, weight: neighbour.weight });
          continue;
        }
      }
    }
    console.log(cost);
  }
  return -1;
}
