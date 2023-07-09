import { Component, OnInit } from '@angular/core';
import { DataService, Producto } from 'src/app/services/data/data.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.scss'],
})
export class PostresComponent  implements OnInit {

  producto: Producto[] = [];

  constructor(private data:DataService,private toast:ToastsService) { }

  ngOnInit() {
    this.data.getPostres().subscribe(res=>{
      this.producto = res;
    }
    );
  }


  borrar(id:string){
    this.data.deleteProducto(id,'postres');
    this.toast.MensajePersonalizado('Postre eliminado',1000);
  }

}
