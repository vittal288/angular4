import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule, PreloadAllModules } from '@angular/router';

// COMPONENTS
import { NotFoundComponent } from './global-components/not-found/not-found.component';


const appRoutes: Routes = [
    { path: '', loadChildren: './modules/anytime-lib/anytime-lib.module#AnytimeLibModule' },
    { path: 'admin-portal', loadChildren: './modules/admin-portal/admin-portal.module#AdminPortalModule' },
    { path: 'user-profile', loadChildren: './modules/user-profile/user-profile.module#UserProfileModule' }
    // { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
