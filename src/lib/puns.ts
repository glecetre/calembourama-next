import "server-only"

console.log("puns.ts")

export type PunData = {
  text: string;
  author: string;
};

export type Pun = PunData & {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

let nextPunId = 1;
const puns: Array<Pun> = [
  {
    id: nextPunId++,
    text: "This is a pun.",
    author: "Anonymous",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: nextPunId++,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jacques",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: nextPunId++,
    text: "Lorem ipsum dolor sit amet, haha.",
    author: "Jacques",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function getPunById(id: number): Promise<Pun | undefined> {
  return puns.find((pun) => pun.id === id);
}

export async function saveNewPun(punData: PunData): Promise<Pun> {
  const now = new Date();
  const newPun = {
    ...punData,
    id: nextPunId++,
    createdAt: now,
    updatedAt: new Date(now),
  };

  puns.push(newPun);
  console.log("pushing new pun", puns);
  return newPun;
}

export async function getLatestPuns(count: number): Promise<Pun[]> {
  console.log("Getting latest puns. total count", puns.length);
  return puns
    .toSorted((left, right) => Number(left.createdAt > right.createdAt))
    .slice(0, count);
}
