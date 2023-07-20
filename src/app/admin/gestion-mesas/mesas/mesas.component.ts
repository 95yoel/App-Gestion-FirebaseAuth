import { Component, OnInit } from '@angular/core';
import { DataService,Mesa} from 'src/app/services/data/data.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss'],
})
export class MesasComponent  implements OnInit {

  mesas:Mesa[]=[];

  constructor(private data:DataService,private toast:ToastsService) { }

  ngOnInit() {
    this.data.getMesas().subscribe(res=>{
      this.mesas = res;
    });
  }

  borrar(id:string){
    this.data.deleteMesa(id);
    this.toast.MensajePersonalizado('Mesa eliminada con exito',1000);
  }

}
