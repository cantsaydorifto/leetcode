export function numDecodings(s: string): number {
  const memo = new Map<string, number>();
  return dfs(s, memo);
}

function dfs(s: string, memo: Map<string, number>): number {
  if (s.startsWith("0")) return 0;
  if (s.length === 0 || s.length === 1) return 1;
  if (Number(s.substring(0, 2)) > 26) {
    if (memo.has(s.substring(1))) {
      return memo.get(s.substring(1))!;
    }
    return dfs(s.substring(1), memo);
  }
  let l: number | null = null;
  let r: number | null = null;
  if (memo.has(s.substring(1))) {
    l = memo.get(s.substring(1))!;
  } else {
    l = dfs(s.substring(1), memo);
    memo.set(s.substring(1), l);
  }
  if (memo.has(s.substring(2))) {
    r = memo.get(s.substring(2))!;
  } else {
    r = dfs(s.substring(2), memo);
    memo.set(s.substring(2), r);
  }
  return l + r;
}

// export function numDecodings(s: string): number {
//   const memo = new Map<string, number>();
//   const cnt = [0];
//   dfsBruteForce(s, cnt, [], memo);
//   return cnt[0];
// }

// function dfsBruteForce(
//   s: string,
//   cnt: number[],
//   cur: string[],
//   memo: Map<string, number>
// ) {
//   console.log("dfsbf ", s, cnt, cur);
//   //   if (s.length === 0) return;
//   //   if (memo.has(s)) {
//   //     cnt[0] += memo.get(s)!;
//   //     return;
//   //   }
//   if (s.length === 0) {
//     let strToAdd = true;
//     // console.log(cur);
//     for (let j = 0; j < cur.length; j++) {
//       if (Number(cur[j]) > 26) {
//         strToAdd = false;
//         break;
//       }
//     }
//     strToAdd ? cnt[0]++ : null;
//     return cnt[0];
//   }
//   if (s.startsWith("0")) return 0;
//   for (let i = 0; i < s.length; i++) {
//     // if (memo.has(s.substring(i + 1))) {
//     //   cnt[0] += memo.get(s.substring(i + 1))!;
//     //   return cnt[0];
//     // }
//     cur.push(s.substring(0, i + 1));
//     dfsBruteForce(s.substring(i + 1), cnt, [...cur], memo);
//     // memo.set(
//     //   s.substring(i + 1),
//     //   dfsBruteForce(s.substring(i + 1), cnt, [...cur], memo)
//     // );
//     // console.log(memo);
//     cur.pop();
//   }
//   memo.set(s, cnt[0]);
//   return cnt[0];
// }
