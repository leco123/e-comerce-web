import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Api } from './api';
import { Produto } from './../modules/cadastros/produto/models/produto';

@Injectable()
export class ProdutoService extends Api<Produto> {

  private totalItens: EventEmitter<number> = new EventEmitter(); ;
  public buscar: EventEmitter<string> = new EventEmitter();
  
  constructor(
    public http: HttpClient,
  ) {
    super(http, 'produto');
  }

  /**
   * @author Alex de Carvalho
   * @param nomeItem string
   * @returns Observable<Produto>
   * @description Coleta os termos digitados e faz uma requisição para API
   */
  public pesquisarItem(nomeItem: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.url}/pesquisar?value=${nomeItem}`)
      .pipe(
        tap((value) => console.log('[API-PESQUISA-ITEM] => Fazendo busca na API por: ' + nomeItem, value)),
        distinctUntilChanged(),
        map((item: Produto) => item)
      );
  }

  /**
   * @author Alex de Carvalho
   * @returns Observable<Produto>
   * @description Faz requisição para API solicitando todos os itens armazenados na base de dados
   */
  public lerTodos(): Observable<Produto> {
    return this.http.get<Produto>(this.url).pipe(map((item: any) => {
      return item.data;
  }));
  }

   /**
   * @author Alex de Carvalho
   * @returns numItem: number
   * @description Salva o total de registro em na variável totalItens, como fica no produto.sevice
   * fica disponível para todos os componentes que precisam do serviço
   */
  public setTtotalItens(numItem: number): void {
    this.totalItens.emit(numItem);
  }

  /**
   * @author Alex de Carvalho
   * @description Retorna o total de itens
   */
  public getTtotalItens() {
    return this.totalItens;
  }

  /**
   * @author Alex de Carvalho
   * @param itemA 
   * @param itemB 
   * @description implementado para futuramente ordenar registros, ainda não foi implementado em nehuma requisição
   */
  private  ordenaPorCodigo(itemA: Produto, itemB: Produto) {
    if (itemA.nome > itemB.nome) {
      return 1;
    } else if (itemA.nome < itemB.nome) {
      return -1;
    } else {
      return 0;
    }
  }

}
