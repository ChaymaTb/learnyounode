var fs = require('fs')
var arr = process.argv
fs.readFile(arr[2],function(err,content) {
    var line_num = content.toString().split('\n').length-1;
    console.log(line_num);
})