// @@ CORE MODULE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @@ APP COMPONENTS
import { UserProfileComponent } from './user-profile.component';



const userProfileRoutes: Routes = [
    {
        path: '', children: [
            { path: '', component: UserProfileComponent}
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(userProfileRoutes)
    ],
    exports: [RouterModule]
})

export class UserProfileRoutingModule {
    //
}
