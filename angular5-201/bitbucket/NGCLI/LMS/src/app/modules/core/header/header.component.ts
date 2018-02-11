import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';

import { AuthService } from './../../auth/auth.service';
import { SharedService } from './../../shared/shared.service';
// import { LoadingComponent } from './../../../global-components/loading/loading.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, DoCheck {
  public userInfo: any;
  constructor(private router: Router,
    private routes: ActivatedRoute,
    private authService: AuthService,
    private sharedService: SharedService) { }

  ngOnInit() {
    // this.getUserInfo();
  }
  ngDoCheck() {
    this.getUserInfo();
  }

  getUserInfo() {
    if (this.authService.getUserInfo()) {
      this.userInfo = this.authService.getUserInfo();
    } else {
      this.userInfo = null;
    }

  }

  onLogout(event) {
    event.preventDefault();
    this.authService.logout().then((data) => {
      this.router.navigate(['/']);
      this.sharedService.removeSessionItem('user');
    }).catch((err) => {
      console.log('err', err);
    });
  }

  onProfile(event) {
    event.preventDefault();
    this.router.navigate(['user-profile']);
  }



}
