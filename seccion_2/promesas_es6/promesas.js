var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Proceso terminado');
        resolve('Todo bien');
    }, 1500);
});
prom1.then(console.log);
