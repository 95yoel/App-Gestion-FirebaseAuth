import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.scss'],
})
export class PostresComponent  implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {}

}
