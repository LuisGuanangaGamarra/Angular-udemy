class Avenger{
    nombre:string="Sin nombre";
    equipo :string;
    nombreReal:string;

    puedePelar:boolean=true;
    peleasGanadas:number=0;
    /*No se permite multiple constructores*/
    constructor(nombre:string,equipo:string,nombreReal:string){
        this.nombre=nombre;
        this.equipo=equipo;
        this.nombreReal=nombreReal;
    }
}

let antman:Avenger=new Avenger("Antman","CAP","Scoot lander");
console.log(antman);