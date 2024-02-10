export function findCircleNum(isConnected: number[][]): number {
  const parent = new Array(isConnected.length + 1)
    .fill(-1)
    .map((_, idx) => idx);
  let cnt = isConnected.length;
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected.length; j++) {
      if (i === j || isConnected[i][j] !== 1) continue;
      cnt -= union(i + 1, j + 1, parent);
    }
  }
  return cnt;
}

function find(val: number, parent: number[]) {
  if (parent[val] === val) return val;
  return find(parent[val], parent);
}

function union(val1: number, val2: number, parent: number[]) {
  const par1 = find(val1, parent);
  const par2 = find(val2, parent);
  if (par1 === par2) return 0;
  parent[par1] = parent[par2];
  return 1;
}

function findCircleNumUsingDFS(isConnected: number[][]): number {
  let cnt = 0;
  const visited = new Set<number>();
  const adjList = new Map<number, number[]>();
  for (let i = 0; i < isConnected.length; i++) {
    adjList.set(i + 1, []);
    for (let j = 0; j < isConnected.length; j++) {
      if (i === j) continue;
      if (isConnected[i][j] === 1) {
        adjList.get(i + 1)!.push(j + 1);
      }
    }
  }
  for (const [key, val] of adjList.entries()) {
    if (!visited.has(key)) {
      dfs(key, adjList, visited);
      cnt++;
    }
  }
  return cnt;
}

function dfs(
  startingVertex: number,
  adjList: Map<number, number[]>,
  visited: Set<number>
): number[] {
  const res: number[] = [];
  const stack: number[] = [];
  if (!adjList.has(startingVertex)) {
    throw Error("Starting Vertex Does Not Exist");
  }
  stack.push(startingVertex);
  while (stack.length > 0) {
    const currentVertex = stack.pop()!;
    if (visited.has(currentVertex)) continue;
    visited.add(currentVertex);
    stack.push(...adjList.get(currentVertex)!);
    res.push(currentVertex);
  }
  return res;
}
