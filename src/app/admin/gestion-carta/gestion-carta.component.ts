import { Component, OnInit } from '@angular/core';
import { DataService, Producto } from '../../services/data/data.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-gestion-carta',
  templateUrl: './gestion-carta.component.html',
  styleUrls: ['./gestion-carta.component.scss'],
})
export class GestionCartaComponent  implements OnInit {

  Producto ={
    id : '',
    nombre:'',
    precio: 0,
  }
  ProductoEntrantes:Producto ={
    id : '',
    nombre:'',
    precio: 0,
  }
  ProductoPlatos:Producto ={
    id : '',
    nombre:'',
    precio: 0,
  }
  ProductoPostres:Producto ={
    id : '',
    nombre:'',
    precio: 0,
  }
  ProductoBebidas:Producto ={
    id : '',
    nombre:'',
    precio: 0,
  }

  
  mostrarFormEntrante:boolean=false;
  mostrarFormPlato:boolean=false;
  mostrarFormPostre:boolean=false;
  mostrarFormBebida:boolean=false;


  constructor(private data:DataService,private toast:ToastsService) { }

  ngOnInit() {}

  anadir(prod: Producto, categoria: string) {
    if (prod.nombre == '' || prod.precio == 0) {
      this.toast.MensajePersonalizado('Rellene todos los campos', 1000);
      return;
    }
    prod.precio = prod.precio;
    prod.nombre = prod.nombre;
  
    this.data.addProducto(prod, categoria).then((docRef) => {
      prod.id = docRef.id;
      this.toast.MensajePersonalizado('Producto añadido correctamente', 1000);
    }).catch(() => {
      alert('Error al añadir el producto');
      this.toast.MensajePersonalizado('Error al añadir el producto', 1000);
    });
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
    this.Producto.id = '';
    this.Producto.nombre = '';
    this.Producto.precio = 0;
    this.ProductoEntrantes.id = '';
    this.ProductoEntrantes.nombre = '';
    this.ProductoEntrantes.precio = 0;
    this.ProductoPlatos.id = '';
    this.ProductoPlatos.nombre = '';
    this.ProductoPlatos.precio = 0;
    this.ProductoPostres.id = '';
    this.ProductoPostres.nombre = '';
    this.ProductoPostres.precio = 0;
    this.ProductoBebidas.id = '';
    this.ProductoBebidas.nombre = '';
    this.ProductoBebidas.precio = 0;
  }
  

}
