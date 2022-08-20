var fs = require('fs')
var arr=process.argv
var data=fs.readFileSync(arr[2]).toString().split('\n')
console.log(data.length-1);