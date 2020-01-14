interface Xmen
{
    nombre :string,
    poder : string
}

function enviarMision (x:Xmen)
{
    console.log(`Enviando a: ${x.nombre}`);
}

let wolverin : Xmen ={
    nombre:'Wolverin',
    poder:'Regeneración'
}

enviarMision(wolverin);