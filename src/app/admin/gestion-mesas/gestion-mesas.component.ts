import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-gestion-mesas',
  templateUrl: './gestion-mesas.component.html',
  styleUrls: ['./gestion-mesas.component.scss'],
})
export class GestionMesasComponent  implements OnInit {

  mesa={
    id:'',
    numero:0,
    ruta:'',
    estado:'',
    pedidos:[]
  }
  
  defecto:boolean=true;
  mostrarFormMesa:boolean=false;
  
  
  constructor(private data:DataService,private toast:ToastsService) { }

  ngOnInit() {}


  mostrar(){
    this.mostrarFormMesa=!this.mostrarFormMesa;
  }

  comprobarMesa(){

    let rutaBase =`../../../assets/mesas/mesa${this.mesa.numero}.png`;
    this.mesa.numero=this.data.avanzarNumeroMesa();
    this.mesa.ruta=rutaBase;
    this.mesa.estado="vacio"
    this.mesa.pedidos=[];
    this.data.addMesa(this.mesa).then((docRef) => {
      this.mesa.id = docRef.id;  
      this.toast.MensajePersonalizado('Mesa añadida correctamente', 1000);
      this.defecto=true;
    }).catch(() => {
      this.toast.MensajePersonalizado('Error al añadir la mesa', 1000);
    });
  }

  comprobarCambios(){
    if(this.mesa.numero==0){
      this.defecto=true;
    }else{
      this.defecto=false;
    }
  }

}
