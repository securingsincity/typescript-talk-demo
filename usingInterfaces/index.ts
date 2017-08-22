import { getUser, User } from './getUser'

function showUserAddress(user: User): string {
  return `${user.address.street}\n${user.address.city}, ${user.address.state} ${user.address.zipCode}`
}
const user = getUser(1)
console.log(showUserAddress(user))

