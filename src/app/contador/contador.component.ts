 import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
    
        <h1>Hola Randall desde Component manualmente</h1>
        <h1> {{ titulo }}</h1>
        <button (click)="sumar()">{{ '+' + base}}</button>
        <button>{{ numero }}</button>
        <button (click)="restar()">{{ '-' + base}}</button>
    
    `
})

 export class ContandorComponent {

    titulo:String = 'Mi primera Aplicacion en Angular';
    numero: number =10;
    base:number = 10 ;
    
    sumar(){
     this.numero += this.base;
    }
    restar(){
      this.numero -= this.base;  
    }
}
