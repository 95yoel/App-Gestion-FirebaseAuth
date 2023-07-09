import { Component, OnInit } from '@angular/core';
import { DataService, Mesa } from '../services/data/data.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  mesas:Mesa[]=[];
  
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getMesas().subscribe(res=>{
      this.mesas = res;
    }
    );
  }

}
