import { Subscription } from 'rxjs';
import { ProdutoService } from './../../services/produto.service';
import { Produto } from './../../modules/cadastros/produto/models/produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-produto-home',
  templateUrl: './produto-home.component.html',
  styleUrls: ['./produto-home.component.css'],
})
export class ProdutoHomeComponent implements OnInit {

  public totalItens: number;
  public produtos: Produto[];
  public subscription: Subscription;

  constructor(private router: Router, private produtoService: ProdutoService) {}

  ngOnInit() {
      this.carregarItens();
      this.carregarItensPesquisados();
      this.contarItens();
  }

  /**
   * @author Alex de Carvalho
   * @description Carregar todos os itens disponniveis na API
   */
  private carregarItens(): void {
    this.produtoService.lerTodos()
    .pipe(
      tap((value) => console.log('[CARREGAR-ITENS] => augardando carregar itens...', value))
    )
    .subscribe((listaItens: Produto[]) => {
      if (listaItens) {
        this.produtoService.setTtotalItens(listaItens.length);
        this.produtos = listaItens;
      }
    },
    error => console.error('[CARREGAR-ITENS] => Carregar Itens: ', error),
    () => console.info('[CARREGAR-ITENS] => Itens carregados com sucesso!'));
  }

  /**
   * @author Alex de Carvalho
   * @description Retorna o total de itens
   */
  private contarItens(): void {
    this.produtoService.getTtotalItens()
      .subscribe((total: number)=> this.totalItens = total);
  }

  /**
   * @author Alex de Carvalho
   * @description Carrega itens conforme termos pesquisado e retornado da API
   */
  private carregarItensPesquisados() {
    this.subscription = this.produtoService.buscar.subscribe((termo: string) => {
      this.pesquisarItem(termo);
    });
  }

  /**
   * @author Alex de Carvalho
   * @description Termo pesquisado no campo de pesquisa e encaminhado para API
   */
  private pesquisarItem(item: string) {
      this.produtoService.pesquisarItem(item).subscribe((listaItens: Produto[]) => {
        if (listaItens) {
          this.produtoService.setTtotalItens(listaItens.length);
          this.produtos = listaItens;
        }
      }, error => console.error('[PESQUISAR-ITEM] => Pesquisa Item: ', error),
      () => console.info('[PESQUISAR-ITEM] => Itens carregados com sucesso!')     
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
