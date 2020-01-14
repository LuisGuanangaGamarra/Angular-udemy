let prom1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Proceso terminado');
        resolve('Todo bien');
    },1500);
});

prom1.then(console.log);