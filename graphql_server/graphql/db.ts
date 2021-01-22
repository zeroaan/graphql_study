export const people = [
  {
    id: 1,
    name: "zeroaan",
    age: 20,
    gender: "male",
  },
  {
    id: 2,
    name: "korea",
    age: 25,
    gender: "female",
  },
  {
    id: 3,
    name: "seoul",
    age: 22,
    gender: "male",
  },
  {
    id: 4,
    name: "icheon",
    age: 24,
    gender: "male",
  },
  {
    id: 5,
    name: "suwon",
    age: 21,
    gender: "female",
  },
]

export const getById = (id: number) => {
  const filteredPeople = people.filter((person) => person.id === id)
  return filteredPeople[0]
}
