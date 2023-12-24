import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErroRoutingModule } from './erro-routing.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        PaginaNaoEncontradaComponent
    ],
    imports: [
        CommonModule,
        ErroRoutingModule,
        SharedModule
    ]
})
export class ErroModule { }
