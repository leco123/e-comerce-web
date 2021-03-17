import { ProdutoService } from './../../../services/produto.service';
import { PesquisaModule } from './../../pesquisa/pesquisa.module';
import { FormularioModule } from './../../formulario/formulario.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FormularioModule,
    PesquisaModule,
  ],
  providers:[ProdutoService]
})
export class ProdutoModule { }
