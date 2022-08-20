var fs = require('fs')
var path = require('path')

var arr = process.argv


fs.readdir(arr[2], function (err, file) {
    if (err) return console.error(err)
    file.forEach(function (f) {
        var extension = '.' + arr[3]
        if (path.extname(f) === extension) {
            console.log(f)
        }
    })
})