import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
    PorPaisComponent,
   
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
   
    PorPaisComponent,
    
  ]
})
export class PaisModule { }
