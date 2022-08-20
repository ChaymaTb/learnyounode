var mymodule = require('./mymodule')
var dir = process.argv[2]
var ext = process.argv[3]

mymodule(dir, ext, function (err, list) {
    if (err) console.error('There was an error:', err)

    list.forEach((file) => console.log(file))
})