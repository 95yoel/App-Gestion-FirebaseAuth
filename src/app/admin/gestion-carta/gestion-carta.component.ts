import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-gestion-carta',
  templateUrl: './gestion-carta.component.html',
  styleUrls: ['./gestion-carta.component.scss'],
})
export class GestionCartaComponent  implements OnInit {

  Producto ={
    id : 0,
    nombre:'',
    precio : 0,
  }
  
  mostrarFormEntrante:boolean=false;
  mostrarFormPlato:boolean=false;
  mostrarFormPostre:boolean=false;
  mostrarFormBebida:boolean=false;


  constructor(private data:DataService) { }

  ngOnInit() {}

  anadir(categoria:string){
        
    this.Producto.id = this.data.avanzarId();
    this.data.addProducto(this.Producto,categoria);
  }

  abrir(){
    this.data.getEntrantes().subscribe((res)=>{
      console.log(res);
    }
    ); 
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

  

}
