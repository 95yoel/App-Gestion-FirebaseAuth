import { Component, OnInit } from '@angular/core';
import { DataService, Producto } from 'src/app/services/data.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss'],
})
export class BebidasComponent  implements OnInit {

  producto: Producto[] = [];

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getBebidas().subscribe(res=>{
      this.producto = res;
    }
    );
  }


}
