const Koa = require('koa');
const app = new Koa();


app.use(ctx => {

    const URL=ctx.req.url;

    if( URL === '/'){

        ctx.res.writeHead(200,{'Content-Type':'text/html'});
        ctx.res.write('<h1>Index Sayfasina Hosgeldiniz</h1>');
   
    } else if(URL === '/about'){

        ctx.res.writeHead(200,{'Content-Type':'text/html'});
        ctx.res.write('<h1>Hakkimda Sayfasina Hosgeldiniz</h1>');
    
    } else if(URL === '/contact'){
        
        ctx.res.writeHead(200,{'Content-Type':'text/html'});
        ctx.res.write('<h1>Iletisim Sayfasina Hosgeldiniz</h1>');
   
    } else{
        ctx.res.writeHead(200,{'Content-Type':'text/html'});
        ctx.res.write('<h1>404 Sayfa Bulunamadi</h1>');
    }

    ctx.res.end();
  
});


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Sunucu ${PORT} porttan baslatildi`);
});