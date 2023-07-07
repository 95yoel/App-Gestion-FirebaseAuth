import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { GestionCuentasComponent } from './gestion-cuentas/gestion-cuentas.component';
import { GestionMesasComponent } from './gestion-mesas/gestion-mesas.component';
import { RegistrarAdminsComponent } from './registrar-admins/registrar-admins.component';
import { GestionCartaComponent } from './gestion-carta/gestion-carta.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule
  ],
  declarations: [
    AdminPage,
    GestionCuentasComponent,
    GestionMesasComponent,
    RegistrarAdminsComponent,
    GestionCartaComponent
  ]
})
export class AdminPageModule {}
