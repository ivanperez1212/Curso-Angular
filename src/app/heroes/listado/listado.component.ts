import { Component, OnInit } from '@angular/core';
import { strictEqual } from 'assert';
import { browser } from 'protractor';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  borrados : string = '';
  
  
 heroes: string[] = ['spiderman','hulk','thor','cap']; 

 borrarHeroe(){
   
   this.borrados = this.heroes.shift() || '';
  
 }
 
}
