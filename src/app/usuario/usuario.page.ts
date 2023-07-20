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

  mostrarId(id:string){
    this.toast.MensajePersonalizado(id,1000);
  }
  

}
