import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-entrantes',
  templateUrl: './entrantes.component.html',
  styleUrls: ['./entrantes.component.scss'],
})
export class EntrantesComponent  implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {}

}
