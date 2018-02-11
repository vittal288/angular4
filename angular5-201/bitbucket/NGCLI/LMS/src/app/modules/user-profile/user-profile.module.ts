import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';

import { UserProfileComponent } from './user-profile.component';
import { UserFriendComponent } from './user-friend/user-friend.component';

// @@ PIPES
// import { FirstLetterUpperCasePipe } from './../../global-components/pipes/first-letter-uppercase.pipes';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ],
  declarations: [   
    UserProfileComponent,
    UserFriendComponent]
})
export class UserProfileModule { }
