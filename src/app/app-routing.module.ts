import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";

const routes: Routes =[
    {
        path: '', 
        component: PorPaisComponent,
        pathMatch: 'full'
    },

    {
        path: '**',
        redirectTo:''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]

})

export class AppRoutingModule{}