let avengers:string[] = ["Thor","Steve","Tony"];

//Destructuracion de arreglos
let [thor,capi,ironman] = avengers;

let [,,Tony] = avengers;
console.log(thor,capi,ironman);
console.log(Tony);