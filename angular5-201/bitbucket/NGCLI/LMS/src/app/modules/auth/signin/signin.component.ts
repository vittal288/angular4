
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


import { AuthService } from '../auth.service';
import { SharedService } from './../../shared/shared.service';
import { LoginMessage } from './../../../models/login.model';
import { LoadingComponent } from './../../../global-components/loading/loading.component';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public authMessages: string;
  public loginFlag: string;
  public hideMessage = false;
  userDetail: any;
  // userName: any;
  // languages;
  // email: any;
  // sEmails: any;
  // currentBrowserUrl: any;
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  constructor(private authService: AuthService,
    private router: Router,
    private routes: ActivatedRoute,
    private sharedService: SharedService,
    private loadingComponent: LoadingComponent) {

  }
  ngOnInit() {
    this.initSignInReactiveForm();
    this.initRegisterReactiveForm();
  }

  initSignInReactiveForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    });
  }

  initRegisterReactiveForm() {
    this.registerForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    });
  }

  onLoginWithGoogle() {
    this.loadingComponent.onOpenModal();
    this.authService.signInWithGoogle().then((resp) => {
      this.router.navigate(['/']);
      this.loadingComponent.onCloseModal();
    }).catch((err) => {
      console.log('err', err);
      this.router.navigate(['signin']);
      this.loadingComponent.onCloseModal();
    });
  }


  onCreateAccountWithEmailAndPassword() {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    this.authService.registerWithEmailAndPassword(email, password).then((resp) => {
      if (resp) {
        this.loginFlag = 'Success';
        this.authMessages = 'Account is created';
        this.hideMessage = true;
        setTimeout(() => {
          this.hideMessage = false;
        }, 5000);
        console.log('User Is created', resp);
        this.router.navigate(['/']);
      }
    }).catch((err) => {
      this.loginFlag = 'Error';
      this.authMessages = err.message;
      this.hideMessage = true;
      setTimeout(() => {
        this.hideMessage = false;
      }, 5000);
    });
  }

  onLoginWithEmailAndPassword() {

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.signInWithEmailAndPassword(email, password).then((resp) => {
      if (resp) {
        // this.loginFlag = 'Success';
        // this.authMessages = 'Account is created';
        // this.hideMessage = true;
        // setTimeout(() => {
        //   this.hideMessage = false;
        // }, 5000);
        // console.log('User Is created', resp);
        if (resp.email === 'admin@admin.com') {
          this.router.navigate(['admin-portal']);
        } else {
          this.router.navigate(['/']);
        }
        this.loginForm.reset();
      }
    }).catch((err) => {
      // this.loginFlag = 'Error';
      // this.authMessages = err.message;
      // this.hideMessage = true;
      setTimeout(() => {
        this.hideMessage = false;
      }, 5000);
    });
  }
  isOnline(): boolean {
    return this.authService.isAuthenticated();
  }
}
