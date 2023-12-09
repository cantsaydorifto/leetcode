export function numTilePossibilities(tiles: string) {
  let res: string[] = [];
  backtrack("", res, tiles, new Array(tiles.length).fill(false));
  return res;
}

function backtrack(
  arr: string,
  res: string[],
  strs: string,
  checkElement: boolean[]
) {
  if (!res.includes(arr)) res.push(arr);

  for (let i = 0; i < strs.length; i++) {
    if (checkElement[i]) continue;
    if (i > 0 && strs[i] === strs[i - 1] && !checkElement[i - 1]) continue; //Or Use A Map
    checkElement[i] = true;
    arr += strs[i];
    backtrack(arr, res, strs, checkElement);
    arr = arr.slice(0, arr.length - 1);
    checkElement[i] = false;
  }
}
