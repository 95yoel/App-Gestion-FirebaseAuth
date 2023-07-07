import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ToastsService } from '../services/toasts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {


  constructor(private admin:AdminService,private toast:ToastsService,private router:Router) { }

  ngOnInit() {
  }

  salir(){
    this.admin.logout().then(()=>{
      this.toast.MensajePersonalizado('Sesión cerrada con éxito',1000);
      this.router.navigate(['/inicio']);
    }
    ).catch((error)=>{
      console.log('Error al cerrar sesión',error);
    }
    );

  }
  

}
