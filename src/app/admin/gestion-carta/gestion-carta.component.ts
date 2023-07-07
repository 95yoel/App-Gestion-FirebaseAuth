import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-gestion-carta',
  templateUrl: './gestion-carta.component.html',
  styleUrls: ['./gestion-carta.component.scss'],
})
export class GestionCartaComponent  implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {}

  abrir(){
    this.data.getEntrantes().subscribe((res)=>{
      console.log(res);
    }
    );
    
  }

}
