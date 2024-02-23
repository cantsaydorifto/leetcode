import { MinPriorityQueue } from "@datastructures-js/priority-queue";

class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

export function meetingRooms1(intervals: Interval[]): boolean {
  intervals.sort((a, b) => a.start - b.start);
  let time = 0;
  for (const el of intervals) {
    if (time > el.start) return false;
    time = el.end;
  }
  return true;
}

// export function meetingRooms2(intervals: Interval[]): number {
//   intervals.sort((a, b) => a.start - b.start);
//   const start = intervals.map((el) => el.start);
//   const end = intervals.map((el) => el.end);
//   let [i, j, cnt, overlaps] = [0, 0, 0, 0];
//   while (i < start.length) {
//     if (end[j] > start[i]) {
//       i++;
//       cnt++;
//     } else {
//       j++;
//       cnt--;
//     }
//     overlaps = Math.max(cnt, overlaps);
//   }
//   return overlaps;
// }

export function meetingRooms2(intervals: Interval[]): number {
  intervals.sort((a, b) => a.start - b.start);
  const start = intervals.map((el) => el.start);
  let res = 0;
  const end = intervals.map((el) => el.end);
  for (const el of end) {
    let overlaps = 1;
    for (const i of intervals) {
      if (el < i.end && el > i.start) overlaps++;
    }
    res = Math.max(overlaps, res);
  }
  return res;
}

interface Meeting {
  start: number;
  end: number;
}

interface AvailableRoom {
  roomNumber: number;
  meeting: Meeting;
}

// 2402 ==> Meeting Rooms III
export function mostBooked(n: number, meetings: number[][]) {
  const available = new MinPriorityQueue<number>({
    compare: (a, b) => a - b,
  });
  for (let i = 0; i < n; i++) available.enqueue(i);
  const used = new MinPriorityQueue<number[]>({
    compare: (a, b) => a[0] - b[0] || a[1] - b[1],
  });
  const count = new Array(n).fill(0);

  meetings.sort((a, b) => a[0] - b[0]);
  meetings.forEach(([start, end]) => {
    while (used.size() > 0 && start >= used.front().element[0]) {
      const [, room] = used.dequeue().element;
      available.enqueue(room);
    }
    if (available.size() > 0) {
      const room = available.dequeue().element;
      used.enqueue([end, room]);
      count[room] += 1;
    } else {
      const [earliestEnd, room] = used.dequeue().element;
      used.enqueue([earliestEnd + (end - start), room]);
      count[room] += 1;
    }
  });
  return count.indexOf(Math.max(...count));
}
// export function mostBooked(n: number, _meetings: number[][]): number {
//   const meetings: Meeting[] = _meetings
//     .sort((a, b) => a[0] - b[0])
//     .map((el) => ({ start: el[0], end: el[1] }));
//   const usedRooms = new MinPriorityQueue<AvailableRoom>({
//     compare: (a, b) =>
//       a.meeting.end - b.meeting.end || a.roomNumber - b.roomNumber,
//   });
//   const roomCnt: number[] = Array(n).fill(0);
//   const availableRooms = new MinPriorityQueue<number>({
//     compare: (a, b) => a - b,
//   });
//   for (let i = 0; i < n; i++) {
//     availableRooms.enqueue(i);
//   }
//   for (const meeting of meetings) {
//     while (
//       usedRooms.size() > 0 &&
//       meeting.start >= usedRooms.front().element.meeting.end
//     ) {
//       const {
//         element: { roomNumber },
//       } = usedRooms.dequeue();
//       availableRooms.enqueue(roomNumber);
//     }
//     if (availableRooms.size() === 0) {
//       const { element: frontRoom } = usedRooms.dequeue();
//       const duration = meeting.end - meeting.start;
//       usedRooms.enqueue({
//         roomNumber: frontRoom.roomNumber,
//         meeting: {
//           start: frontRoom.meeting.start,
//           end: frontRoom.meeting.end + duration,
//         },
//       });
//       roomCnt[frontRoom.roomNumber] += 1;
//       continue;
//     }
//     const { element: availableRoomNumber } = availableRooms.dequeue();
//     usedRooms.enqueue(
//       {
//         meeting: { start: meeting.start, end: meeting.end },
//         roomNumber: availableRoomNumber,
//       },
//       meeting.end
//     );
//     roomCnt[availableRoomNumber] += 1;
//   }
//   return roomCnt.indexOf(Math.max(...roomCnt));
// }
