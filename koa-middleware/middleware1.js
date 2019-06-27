const Koa = require('Koa')
const app = new Koa()

/*
middleware1 start
middleware2 start
middleware3 start
middleware3 end
middleware2 end
middleware1 end
*/

app.use(async (ctx, next) => {
    console.log('middleware1 start');
    await next()
    console.log('middleware1 end');
})

app.use(async (ctx, next) => {
    console.log('middleware2 start');
    await next()
    console.log('middleware2 end');
})

app.use(async (ctx, next) => {
    console.log('middleware3 start');
    await next()
    console.log('middleware3 end');
})

app.listen('3000', () => {
    console.log('serve running at 3000');

})
