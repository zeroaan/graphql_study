const zeroaan = {
  name: "zeroaan",
  age: 20,
  gender: "male",
}

const resolvers = {
  Query: {
    person: () => zeroaan,
  },
}

export default resolvers
