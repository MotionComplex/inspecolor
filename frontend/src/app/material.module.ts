import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material imports
import { 
    MatButtonModule, 
    MatInputModule, 
    MatExpansionModule, 
    MatGridListModule,
    MatMenuModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatExpansionModule,
        MatGridListModule,
        MatMenuModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatExpansionModule,
        MatGridListModule,
        MatMenuModule
    ],
    providers: [],
})
export class MaterialExportModule {}