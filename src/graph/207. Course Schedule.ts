function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const visited = new Array(numCourses).fill(0);
  const adjList: number[][] = new Array(numCourses).fill([]).map((el) => []);
  for (const [i, j] of prerequisites) adjList[i].push(j);
  for (let i = 0; i < numCourses; i++)
    if (!dfs(i, visited, adjList)) return false;
  return true;
}

function dfs(el: number, visited: number[], adjList: number[][]): boolean {
  if (visited[el] === -1) return false;
  if (visited[el] === 1) return true;
  visited[el] = -1;
  for (const i of adjList[el]) if (!dfs(i, visited, adjList)) return false;
  visited[el] = 1;
  return true;
}
