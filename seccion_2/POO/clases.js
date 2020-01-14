var Avenger = /** @class */ (function () {
    /*No se permite multiple constructores*/
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.puedePelar = true;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "CAP", "Scoot lander");
console.log(antman);
