import { getUser, User } from './getUser'

function showUserAddress(user: User): string | void {
  const address = user.getAddress()
  if (address) {
    return `${address.street}\n${address.city}, ${address.state} ${address.zipCode}`
  }
}

const user = getUser(1)
console.log(showUserAddress(user))

