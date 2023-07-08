import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-gestion-mesas',
  templateUrl: './gestion-mesas.component.html',
  styleUrls: ['./gestion-mesas.component.scss'],
})
export class GestionMesasComponent  implements OnInit {

  mesa={
    id:0,
    numero:0,
    ruta:'',
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
    this.mesa.id=this.data.avanzarNumeroMesa();
    this.mesa.ruta=rutaBase;

    this.data.addMesa(this.mesa).then(()=>{
      this.toast.MensajePersonalizado('Mesa añadida correctamente',1000);
    }
    ).catch(()=>{
      this.toast.MensajePersonalizado('Error al añadir la mesa',1000);
    }
    );

  }

  comprobarCambios(){
    if(this.mesa.numero==0){
      this.defecto=true;
    }else{
      this.defecto=false;
    }
  }

}
