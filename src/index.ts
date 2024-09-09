import { networkDelayTime } from "./graph/743. Network Delay Time";

// dijkstras(
//   5,
//   [
//     [0, 1, 10],
//     [0, 2, 3],
//     [1, 3, 2],
//     [2, 1, 4],
//     [2, 3, 8],
//     [2, 4, 2],
//     [3, 4, 5],
//   ],
//   0
// );
console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);
