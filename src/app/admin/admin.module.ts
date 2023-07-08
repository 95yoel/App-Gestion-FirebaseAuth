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
import { BebidasComponent } from './gestion-carta/bebidas/bebidas.component';
import { EntrantesComponent } from './gestion-carta/entrantes/entrantes.component';
import { PlatosComponent } from './gestion-carta/platos/platos.component';
import { PostresComponent } from './gestion-carta/postres/postres.component';



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
    GestionCartaComponent,
    BebidasComponent,
    EntrantesComponent,
    PlatosComponent,
    PostresComponent,
    
  ]
})
export class AdminPageModule {}
