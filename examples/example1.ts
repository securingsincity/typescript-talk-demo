
const multiply = (x: number, y: number): number => {
  return x * y
}

function showResult(number: number, userNames: string[], showUserName: boolean): string {
  let displayUserName = ''
  if (showUserName) {
    displayUserName = " " + userNames[0]
  }
  return `${number} is your number${displayUserName}`
}