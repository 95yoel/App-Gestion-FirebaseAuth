import { Component, OnInit } from '@angular/core';
import { DataService, Producto } from 'src/app/services/data.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.scss'],
})
export class PlatosComponent  implements OnInit {

  producto: Producto[] = [];

  constructor(private data:DataService,private toast:ToastsService) { }

  ngOnInit() {
    this.data.getPlatos().subscribe(res=>{
      this.producto = res;
    }
    );
  }


  borrar(id:number){
    this.data.deleteProducto(id,'platos');
    this.toast.MensajePersonalizado('Plato eliminado',1000);
  }

}
