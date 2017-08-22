export interface User {
  firstName: string
  lastName: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
  }
}


const users: Array<User> = [
  {
    firstName: "james",
    lastName: "hrisho",
    address: {
      street: "101 Tremont St",
      city: "Boston",
      state: "MA",
      zipCode: "02111"
    }
  },
  {
    firstName: "Scooby",
    lastName: "Doo",
  }
]

export function getUser(id: number): User {
  return users[id]
}