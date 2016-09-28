var express = require("express");
var app = express();

app.get('/',function(req,res){
    res.send("Hello Express");
});

var server = app.listen(8088,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s",host,port);
})


function createEnv(path, opts) {
    var
        autoescape = opts.autoescape && true,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}
