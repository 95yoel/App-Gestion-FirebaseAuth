import { Component, OnInit } from '@angular/core';
import { DataService, Mesa } from '../services/data/data.service';
import { ToastsService } from '../services/toasts/toasts.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  mesas:Mesa[]=[];

  constructor(private data:DataService,private toast:ToastsService) { }

  ngOnInit() {

    this.toast.MensajePersonalizado('Buenos dias',1000);

    this.data.getMesas().subscribe(res=>{
      this.mesas = res;
    }
    );
  }

  mostrarEstado(mesa:Mesa){
    this.toast.MensajePersonalizado("Estado mesa: " +mesa.estado,1000);
    console.log(mesa);
  }
  vaciarMesa(mesa:Mesa){
    mesa.estado="vacio";
    if(mesa.estado=="vacio"){
      this.toast.MensajePersonalizado('La mesa ya esta vacía',1000);
    }else{
      this.data.updateMesa(mesa).then(()=>{
        this.toast.MensajePersonalizado('Mesa vaciada con exito',1000);
      });
    }
   
  }



}
