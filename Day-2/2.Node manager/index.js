const lodash = require('lodash')

const arr = ['rakesh', 'girish', 'anish', 'varun']

const capitalize = lodash.map(arr, lodash.capitalize)
console.log(capitalize);
