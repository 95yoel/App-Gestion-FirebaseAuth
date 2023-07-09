import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { PortapelesService } from 'src/app/services/portapapeles/portapeles.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';


@Component({
  selector: 'app-registrar-admins',
  templateUrl: './registrar-admins.component.html',
  styleUrls: ['./registrar-admins.component.scss'],
})
export class RegistrarAdminsComponent  implements OnInit {

  mostrarContrasena:boolean = false;
  registrado:boolean = false;

  RegisterData = {
    usuario: '',
    contrasena: ''
  };

  contrasenaRepetida:string = '';

  constructor(private toast:ToastsService,private clipBoard:PortapelesService , private admin:AdminService) { }

  ngOnInit() {}

  comprobarUsuario(){
    if(this.contrasenaRepetida!="" && this.RegisterData.contrasena!="" && this.RegisterData.usuario!=""){
      if(this.contrasenaRepetida == this.RegisterData.contrasena){
      

        this.admin.register(this.RegisterData.usuario,this.RegisterData.contrasena).then((res) => {
          this.toast.RegistroCorrecto();
          this.registrado = true;
          console.log(this.RegisterData);
        }).catch((error) => {
          this.toast.MensajePersonalizado(error.message,1000);
        });
        
      }else{
        this.toast.mostrarErrorContrasena();
        this.registrado = false;
        this.limpiarContrasenas();
      }
    }else{
      this.toast.MensajePersonalizado('Rellene todos los campos.',1000);
    }
  }

  copiar(){
    const texto = `usuario: ${this.RegisterData.usuario}  contraseña: ${this.RegisterData.contrasena}`;

    this.clipBoard.copiarCredenciales(texto).then(() => {

      this.toast.MensajePersonalizado('Texto copiado al portapapeles.',1000);
    }).catch((error) => {
      this.toast.MensajePersonalizado('Error al copiar el texto.',1000);
    });

  }

  limpiarContrasenas(){
    this.RegisterData.contrasena = '';
    this.contrasenaRepetida = '';
  }

    
}
