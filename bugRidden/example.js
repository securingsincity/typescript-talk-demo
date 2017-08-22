const { getUser } = require('./getUser')
const assert = require('assert');
const user = getUser(0)

const showUserAddress = (user) => {
  return `${user.address.street}\n${user.address.city}, ${user.address.state} ${user.address.zipCode}`
}

const address = showUserAddress(user)
const expected = `101 Tremont St\nBoston, MA 02111`

assert.equal(address, expected, "NAILED IT")

