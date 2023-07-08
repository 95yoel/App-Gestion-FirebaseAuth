import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-gestion-carta',
  templateUrl: './gestion-carta.component.html',
  styleUrls: ['./gestion-carta.component.scss'],
})
export class GestionCartaComponent  implements OnInit {

  Producto ={
    id : 0,
    nombre:'',
    precio: 0,
  }
  
  mostrarFormEntrante:boolean=false;
  mostrarFormPlato:boolean=false;
  mostrarFormPostre:boolean=false;
  mostrarFormBebida:boolean=false;


  constructor(private data:DataService,private toast:ToastsService) { }

  ngOnInit() {}

  anadir(categoria:string){
    
    if(this.Producto.nombre=='' || this.Producto.precio==0){
      this.toast.MensajePersonalizado('Rellene todos los campos',1000);
      return;
    }
    
    this.Producto.id = this.data.avanzarId();
    this.data.addProducto(this.Producto,categoria);
    this.toast.MensajePersonalizado(`${categoria} añadida`,1000);
    this.vaciarFormulario();
  }


  


  abrirFormEntrante(){
    this.mostrarFormEntrante=!this.mostrarFormEntrante;
  }
  abrirFormPlato(){
    this.mostrarFormPlato=!this.mostrarFormPlato;
  }
  abrirFormPostres(){
    this.mostrarFormPostre=!this.mostrarFormPostre;
  }
  abrirFormBebidas(){
    this.mostrarFormBebida=!this.mostrarFormBebida;
  }

  vaciarFormulario(){
    this.Producto.id = 0;
    this.Producto.nombre = '';
    this.Producto.precio = 0;
  }
  

}
