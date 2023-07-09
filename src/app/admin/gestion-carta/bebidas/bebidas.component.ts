import { Component, OnInit } from '@angular/core';
import { DataService, Producto } from 'src/app/services/data/data.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss'],
})
export class BebidasComponent  implements OnInit {

  producto: Producto[] = [];

  constructor(private data:DataService,private toast:ToastsService) { }

  ngOnInit() {
    this.data.getBebidas().subscribe(res=>{
      this.producto = res;
    }
    );
  }

  borrar(id:string){
    this.data.deleteProducto(id,'bebidas');
    this.toast.MensajePersonalizado('Bebida eliminada',1000);
  }


}
