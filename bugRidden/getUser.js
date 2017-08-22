const users = [
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

module.exports = {
  getUser: function(id) {
    return users[id]
  }
}