const Koa = require('Koa')
const compose = require('koa-compose')
const app = new Koa()

/*
middleware1 start
middleware2 start
middleware3 start
middleware3 end
middleware2 end
middleware1 end
*/

const mid1 = async function (ctx, next)  {
    console.log('middleware1 start');
    await next()
    console.log('middleware1 end');
}

const mid2 = async function(ctx, next)  {
    console.log('middleware2 start');
    await next()
    console.log('middleware2 end');
}

const mid3 = async function(ctx, next) {
    console.log('middleware3 start');
    await next()
    console.log('middleware3 end');
}


app.use(compose([mid1, mid2, mid3]))




app.listen('3000', () => {
    console.log('serve running at 3000');

})



