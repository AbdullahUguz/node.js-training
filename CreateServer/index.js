const http = require('http');

const server =http.createServer((req,res) => {

    const URL=req.url;

    if( URL === '/'){

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>Index Sayfasina Hosgeldiniz</h2>');
   
    } else if(URL === '/about'){

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>Hakkimda Sayfasina Hosgeldiniz</h2>');
    
    } else if(URL === '/contact'){
        
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>Iletisim Sayfasina Hosgeldiniz</h2>');
   
    } else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>404 Sayfa Bulunamadi</h2>');
    }

    res.end();
});

const PORT=5000;

server.listen(PORT, () =>{
    console.log(`Sunucu ${PORT}'da baslatildi`);
});


