import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatMenuModule
} from '@angular/material';
@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
    ]
})
export class MaterialModule {

}
