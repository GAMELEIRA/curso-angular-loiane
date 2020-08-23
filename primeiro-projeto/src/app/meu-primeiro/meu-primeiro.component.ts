import {Component} from '@angular/core';

let titulo = "Gabriel Gameleira é o mais monstro dos brabos!"

//@ um decorator e uma notacao pra passarmos para o transpaler informacoes
@Component({
        selector:'meu-primeiro-component', //nome da tag html que eu quero criar
        template: '<p>Meu primero component com Angular!</p>'
})
export class MeuPrimeiroComponent {
    
}