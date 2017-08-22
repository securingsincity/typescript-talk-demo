import { getUser, User } from './usingClasses/getUser'
function genericArrayFilter<T>(array: Array<T>, filter: (a: T) => boolean): Array<T> {
  return array.filter(filter)
}

const gang = ['george', 'elaine', 'jerry', 'kramer']
const numbers = [1,2,3,4]
const users: Array<User> = [getUser(0),getUser(2)]
const justGeorge = genericArrayFilter<string>(gang, (name)=> (name == 'george'))
const numbersUnderThree = genericArrayFilter<number>(numbers, (num)=> (num < 3))
const usersWithAddresses = genericArrayFilter<User>(users, (user)=> (getUser.getAddress() !== undefined)

