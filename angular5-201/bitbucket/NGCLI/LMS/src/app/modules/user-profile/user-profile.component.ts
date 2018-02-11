import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from './../shared/shared.service';

declare var $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
  public userDetails: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    $('.btn-pref .btn').click(function () {
      $('.btn-pref .btn').removeClass('btn-primary').addClass('btn-default');
      $(this).removeClass('btn-default').addClass('btn-primary');
    });

    this.getUserDetails();
  }

  getUserDetails() {
    this.userDetails = this.sharedService.getFromSession('user');
  }


}
