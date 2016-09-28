const Koa = require ('koa');
const fs = require('fs');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const template = require('./template');
const controller = require('./controller');

const isProduction = process.env.NODE_ENV === 'production';

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

if (! isProduction) {
    var staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(bodyParser());

app.use(template('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

app.use(controller());
app.listen('3000');

console.log('app started at port 3000...');

