export function canTraverseAllPairs(nums: number[]): boolean {
  const adjList = new Map<number, number[]>();
  const primeFactorsSeen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const primeFactorsSet = getPrimeFactors(nums[i]);
    for (const el of primeFactorsSet) {
      if (primeFactorsSeen.has(el)) {
        addEdge(adjList, i, primeFactorsSeen.get(el)!);
      } else {
        primeFactorsSeen.set(el, i);
      }
    }
  }
  const visited = new Set<number>();
  dfs(0, adjList, visited);
  return visited.size === nums.length;
}

function getPrimeFactors(n: number): Set<number> {
  const primeFactors = new Set<number>();
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      primeFactors.add(i);
      while (n % i === 0) {
        n /= i;
      }
    }
  }
  if (n !== 1) primeFactors.add(n);
  return primeFactors;
}

function dfs(
  startingVertex: number,
  adjList: Map<number, number[]>,
  visited: Set<number>
) {
  const stack: number[] = [];
  stack.push(startingVertex);
  while (stack.length > 0) {
    const currentVertex = stack.pop()!;
    if (visited.has(currentVertex)) continue;
    visited.add(currentVertex);
    if (adjList.has(currentVertex)) stack.push(...adjList.get(currentVertex)!);
  }
}

function addEdge(adjList: Map<number, number[]>, i: number, j: number) {
  if (adjList.has(i)) {
    adjList.get(i)!.push(j);
  } else {
    adjList.set(i, [j]);
  }
  if (adjList.has(j)) {
    adjList.get(j)!.push(i);
  } else {
    adjList.set(j, [i]);
  }
}

function gcd(a: number, b: number): number {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function canReachDfs(
  adjList: Map<number, number[]>,
  i: number,
  j: number
): boolean {
  const visited = new Set<number>();
  const stack = [i];
  while (stack.length > 0) {
    const currentVertex = stack.pop()!;
    if (currentVertex === j) return true;
    if (visited.has(currentVertex)) continue;
    visited.add(currentVertex);
    if (adjList.has(currentVertex)) stack.push(...adjList.get(currentVertex)!);
  }
  return false;
}
