export function findAllPeople(
  n: number,
  meetings: number[][],
  firstPerson: number
): number[] {
  const peopleWithSecret = new Set<number>([0, firstPerson]);
  const adjList = new Map<number, Map<number, number[]>>();
  const zeroMap = new Map<number, number[]>();
  zeroMap.set(0, [firstPerson]);
  adjList.set(0, zeroMap);
  for (const [el1, el2, time] of meetings.sort((a, b) => a[2] - b[2])) {
    if (!adjList.has(time)) {
      const mp = new Map<number, number[]>();
      mp.set(el1, [el2]);
      mp.set(el2, [el1]);
      adjList.set(time, mp);
      continue;
    }
    const timeMap = adjList.get(time)!;
    if (!timeMap.has(el1)) {
      timeMap.set(el1, [el2]);
    } else {
      timeMap.get(el1)!.push(el2);
    }
    if (!timeMap.has(el2)) {
      timeMap.set(el2, [el1]);
    } else {
      timeMap.get(el2)!.push(el1);
    }
  }
  for (const t of adjList.keys()) {
    const visited = new Set<number>();
    for (const [el] of adjList.get(t)!) {
      if (peopleWithSecret.has(el)) {
        dfs(el, adjList.get(t)!, visited, peopleWithSecret);
      }
    }
  }
  return [...peopleWithSecret.values()];
}

function dfs(
  el: number,
  adjList: Map<number, number[]>,
  visited: Set<number>,
  peopleWithSecret: Set<number>
) {
  if (visited.has(el)) return;
  visited.add(el);
  peopleWithSecret.add(el);
  if (adjList.has(el)) {
    for (const i of adjList.get(el)!.values()) {
      dfs(i, adjList, visited, peopleWithSecret);
    }
  }
}
