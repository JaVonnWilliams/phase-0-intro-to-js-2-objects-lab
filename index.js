// Write your solution in this file!
const employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value })
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

function deleteFromEmployeeByKey(object, key) {
  const newObj = Object.assign({}, object)

  delete newObj[key]

  return newObj
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
  delete object[key]

  return object
}