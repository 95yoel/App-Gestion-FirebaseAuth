import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ToastsService } from 'src/app/services/toasts.service';



@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss'],
})
export class AdminFormComponent  implements OnInit {
  
  loginData = {
    usuario: '',
    contrasena: ''
  };
  constructor(private admin:AdminService,private toast:ToastsService,private router:Router) { }

  ngOnInit() {}

  comprobarUsuario() {

    if(this.loginData.usuario=="" || this.loginData.contrasena==""){
      this.toast.MensajePersonalizado('Rellene todos los campos.',1000);
    }else{

      this.admin.login(this.loginData.usuario,this.loginData.contrasena).then((res) => {
        this.toast.MensajePersonalizado('Bienvenido.',1000);
        this.router.navigate(['/admin']);
      }).catch((error) => {
        this.toast.MensajePersonalizado('Usuario o contraseña incorrectos.',1000);
      });
    }
  }
}
