import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CausasComponent } from './causas/causas.component';
import { ConsecuenciasComponent } from './consecuencias/consecuencias.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InicioComponent,
    CausasComponent,
    ConsecuenciasComponent,
    RecomendacionesComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports:[
    CausasComponent,
    ConsecuenciasComponent,
    ContactoComponent,
    InicioComponent,
    RecomendacionesComponent
  ]
})
export class PagesModule { }
