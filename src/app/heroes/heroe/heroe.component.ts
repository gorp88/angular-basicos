import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre:string = 'Gerardo Randall';
    edad: number =34;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Edan';
    }

    cambiarEdad(): void {
        this.edad = 35;
    }

}