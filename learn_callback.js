var files = require('fs');

files.readdir(".", function(err,filenames){
    var i;
    for (i = 0;i<filenames.length;i++){
        console.log(filenames[i]);
    }
});

console.log("123http://127.0.0.1:3000/?port=5858");


var buf = new Buffer(256);
len = buf.write("1233");

console.log(len);
