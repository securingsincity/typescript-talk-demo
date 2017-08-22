export interface Address {
    street: string
    city: string
    state: string
    zipCode: string
}

// Now we can use a class with public and private properties
export class User {
  public firstName: string
  public lastName: string
  private address?: Address
  // there are default values set here. We're also using a Union type
  constructor(firstName: string, lastName: string, address: Address | undefined = undefined) {
    this.firstName = firstName
    this.lastName = lastName
    this.address = address
  }
  getAddress(): Address | undefined {
    return this.address
  }

}

const users: Array<User> = [
    new User("james","hrisho",{
      street: "101 Tremont St",
      city: "Boston",
      state: "MA",
      zipCode: "02111",
    }),
    new User("scooby", "doo")
]

export function getUser(id: number): User {
  return users[id]
}