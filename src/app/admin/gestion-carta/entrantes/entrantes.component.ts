import { Component, OnInit } from '@angular/core';
import { DataService, Producto } from 'src/app/services/data.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-entrantes',
  templateUrl: './entrantes.component.html',
  styleUrls: ['./entrantes.component.scss'],
})
export class EntrantesComponent  implements OnInit {

  producto: Producto[] = [];

  constructor(private data:DataService,private toast:ToastsService) { }

  ngOnInit() {
    this.data.getEntrantes().subscribe(res=>{
      this.producto = res;
    }
    );
  }

  borrar(id:string){
    this.data.deleteProducto(id,'entrantes');
    this.toast.MensajePersonalizado('Entrante eliminado',1000);
  }

}
