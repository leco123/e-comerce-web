import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaResolveService } from './../../pesquisa/services/pesquisa-resolve.service';
import { PESQUISA_PRODUTO_CONFIG } from '../produto/core/pesquisa-produto-config';
import { PesquisaComponent } from './../../pesquisa/pesquisa.component';
import { ProdutoComponent } from './produto.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'pesquisa', pathMatch: 'full'
  },
  {
    path: 'pesquisa', component: PesquisaComponent,
    data: PESQUISA_PRODUTO_CONFIG,
    resolve: {
      registros: PesquisaResolveService
    }
  },
  {
    path: 'novo', component: ProdutoComponent
  },
  {
    path: ':id', component: ProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
