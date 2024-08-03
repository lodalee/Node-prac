export type CatType = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
};

export const Cat: CatType[] = [
  {
    id: "1",
    name: "a",
    age: 2,
    species: "cat1",
    isCute: true,
    friends: ["2", "3"],
  },
  {
    id: "2",
    name: "b",
    age: 2,
    species: "cat2",
    isCute: true,
    friends: ["1", "3"],
  },
  {
    id: "3",
    name: "c",
    age: 4,
    species: "cat3",
    isCute: true,
    friends: ["1", "2", "4"],
  },
  {
    id: "4",
    name: "d",
    age: 3,
    species: "cat3",
    isCute: true,
    friends: [],
  },
];
