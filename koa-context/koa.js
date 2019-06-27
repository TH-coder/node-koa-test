const Koa = require('koa')
const app = new Koa()

app.use((ctx,next)=>{
    console.log(this); //this unequal ctx
    //query for breakpoint
    ctx.require.url  
    ctx.require.query
    ctx.require.querystring
    ctx.response.type = 'json'//html text/plain img/png
    ctx.response.status = 200 //404 302 
    ctx.response.redirect(url) 
    ctx.state //Namespace,save variable,convey to next middleware example ctx.state.age = 3
    ctx.cookies.get(name, [option]) // get cookies
    ctx.cookies.set(name,value,[option]) //set cookies
    ctx.throw(500) //throw a error
    // ctx.response.body = '<h1>hello world</h1>'
})

app.listen('3000',()=>{
    console.log('app is running');
})