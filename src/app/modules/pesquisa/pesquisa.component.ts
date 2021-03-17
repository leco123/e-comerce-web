import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColunaConfig } from './models/coluna-config';
import { PesquisaConfig } from './models/pesquisa-config';

@Component({
    selector: 'app-pesquisa',
    templateUrl: 'pesquisa.component.html',
    styleUrls: ['pesquisa.component.css'],
    providers: [PesquisaComponent],
})

export class PesquisaComponent implements OnInit {

    public displayedColumns = [];

    public colunas: ColunaConfig[];

    public dataSource = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {
        const config: PesquisaConfig = this.route.snapshot.data as any;
        this.displayedColumns = [...config.colunas.map(col => col.nome), 'action'];
        this.colunas = config.colunas;
        this.dataSource = config.registros;
    }

    ngOnInit() { }

    public editar(value: any) {
        this.router.navigate([value.id], {relativeTo: this.route.parent});
    }

    public cadastrar() {
        this.router.navigate(['novo'], {relativeTo: this.route.parent});
    }
}
