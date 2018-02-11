// @@ CORE MODULE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @@ APP COMPONENTS
import { AnytimeLibComponent } from './anytime-lib.component';
import { BookDetailsComponent } from './book-details/book-details.component';


const anyTimeLibRoutes: Routes = [
    {
        path: '', children: [
            { path: '', component: AnytimeLibComponent},
             { path: 'book-details/:isbn', component: BookDetailsComponent },
            //{ path: 'book-details', component: BookDetailsComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(anyTimeLibRoutes)
    ],
    exports: [RouterModule]
})

export class AnyTimeLibRoutingModule {
    //
}
