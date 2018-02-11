import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedService } from './shared.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [

    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [SharedService]
        };
    }
}
