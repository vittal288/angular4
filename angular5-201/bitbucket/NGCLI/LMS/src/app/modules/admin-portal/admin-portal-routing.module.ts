// @@ CORE MODULE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @@ APP COMPONENTS
import { AdminPortalComponent } from './admin-portal.component';


const adminPortalRoutes: Routes = [
    {
        path: '', children: [
            { path: '', component: AdminPortalComponent}
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(adminPortalRoutes)
    ],
    exports: [RouterModule]
})

export class AdminPortalRoutingModule {
    //
}
