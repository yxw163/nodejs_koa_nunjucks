
var fn_index = async(ctx, next) => {
    ctx.render('index.html',{title:'welcome!'});
};

var fn_signin = async(ctx, netx) => {
    var
        email = ctx.request.body.email || '',
        password = ctx.request.body.password || '';

    console.log(`signin with email: ${email}, password: ${password}`);
    if (email === 'koa@163.com' && password === '12345') {
        ctx.render('signin-ok.html',{name:email});
    } else {
        ctx.render('signin-fail.html',{});
    }
};


module.exports = {
    'GET /':fn_index,
    'POST /signin':fn_signin
};
