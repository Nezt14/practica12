
class Ciclista {
    constructor(distanciaRecorrida) {
        this._distanciaRecorrida = distanciaRecorrida
    }

    get distanciaRecorrida() {

        if (this._distanciaRecorrida > 0) {
            console.log("El ciclista está en movimiento.");
        }
        else if (this._distanciaRecorrida == 0) {
            console.log("El ciclista está actualmente parado.");
        }
        
    }
    set distanciaRecorrida(new_distance) {

        if (new_distance > -1) {
            this._distanciaRecorrida - new_distance;
            console.log(`Nuevo valor asignado a la distancia del recorrido = ${new_distance}`);
        } else {

            console.log("El valor de distancia recorrida debe ser mayor a -1.");
        }
    }
}
const ciclista1 = new Ciclista(1);

ciclista1.distanciaRecorrida=0
ciclista1.distanciaRecorrida

ciclista1.distanciaRecorrida=10

ciclista1.distanciaRecorrida=-1
ciclista1.distanciaRecorrida
