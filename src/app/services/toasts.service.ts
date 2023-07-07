import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {

  constructor(private toastController: ToastController) { }

  async mostrarErrorContrasena() {
    const toast = await this.toastController.create({
      message: 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.',
      duration: 1000,
      position: 'bottom'
    });
  
    await toast.present();
  }

  async RegistroCorrecto() {
    const toast = await this.toastController.create({
      message: 'El usuario se ha registrado correctamente.',
      duration: 1000,
      position: 'bottom'
    });
  
    await toast.present();
  }

  async MensajePersonalizado(mensaje:string,duracion:number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion,
      position: 'bottom'
    });
  
    await toast.present();
  }

}
