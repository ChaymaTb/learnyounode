var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) callback(err)

        list = list.filter((file) => path.extname(file) === '.' + ext )
        
        callback(null, list)
    })
}