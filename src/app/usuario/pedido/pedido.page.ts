import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Mesa } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  idMesa:string = "";
  mesa:Mesa[]=[];
  NumeroMesa:number=0;

  constructor(private ruta:ActivatedRoute,private data:DataService) { }

  ngOnInit() {
    this.obtenerIdMesa();
    console.log(this.idMesa);

    this.data.getMesas().subscribe(res => {
      this.mesa = res.filter(m => m.id === this.idMesa);
      this.NumeroMesa = this.mesa[0].numero;
    });

  }


  obtenerIdMesa(){
    this.ruta.paramMap.subscribe(params => {
      this.idMesa = params.get('mesa') ?? '';
    });
  }

}
