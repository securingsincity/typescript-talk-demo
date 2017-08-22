import {Address, User} from './usingClasses/getUser'

interface PhoneNumber {
  phone: string
}
interface Email {
  email: string
}
interface ContactInfo extends Address, PhoneNumber, Email {}

const printContactInfo= ({street, city, state, zipCode}: Address, phone: string, email: string): ContactInfo => {
  return {
    street,
    city,
    state,
    zipCode,
    phone,
    email
  }
}

const printContactIntersecton = ({street, city, state, zipCode}: Address, phone: string, email: string): Address & PhoneNumber => {
  return {
    street,
    city,
    state,
    zipCode,
    phone
  }
}