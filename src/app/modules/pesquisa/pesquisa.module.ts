import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatTableModule } from '@angular/material';

import { PesquisaComponent } from './pesquisa.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule,
    ],
    exports: [],
    declarations: [PesquisaComponent],
    providers: [],
})
export class PesquisaModule { }
