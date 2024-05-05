export function sumArray(numbers: number[]) {
  const initalValue = 0;
  const total =  numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, initalValue)

  return total;
}
