var nome = "Gabriel Gameleira dos Santos";
function soma(a, b) {
    return a + b;
}
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (numero) { return numero * 3; });
numeros.map(function (numero) {
    return numero * 2;
});
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
