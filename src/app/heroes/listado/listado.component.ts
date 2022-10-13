import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {


  familias: string[] = ['Gerardo', 'Alma', 'Edan', 'Randall'];
  familiaBorrado: string = '';


  borrarIntegrante() {
      console.log("Borrando integrante...");
      this.familiaBorrado = this.familias.shift() || '';
  }

}
