import { Component, OnInit, OnDestroy} from '@angular/core';
import { ProdutoService } from './../../services/produto.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    providers: [ProdutoService]
})
export class HomeComponent implements OnInit, OnDestroy {

    public totalItens: number;

    constructor(public service: ProdutoService) {}

    ngOnInit() {
      this.contarItens();
    }

     /**
     * @author Alex de Carvalho
     * @description Retorna o total de itens
     */
    private contarItens(): void {
      this.service.getTtotalItens()
        .subscribe((total: number)=> this.totalItens = total);
    }

    /**
     * @author Alex de Carvalho
     * @param event 
     * @description Validando evento para identificar teclas precissionadas 
     * e aceitar quando for do tipo Enter(13)
     */
    public pressionarTecla(event: any): void {
      // Identificando a tecla que foi pressionada
      if (event.keyCode === 13) { 
          if (!this.vazio(event.target.value)) {
            this.service.buscar.emit(event.target.value);
          }
      }
    }

    /**
     * @author Alex de Carvalho
     * @param value any
     * @returns boolean true ou false
     * @description retorna true quando valor passado for undefined ou vazio 
     */
    private vazio(value: any): boolean {
      if (value === undefined || value === '') return true;
      return false;
    }

    ngOnDestroy() {}
}
