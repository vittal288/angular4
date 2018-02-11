import {
        CanActivate,
        CanActivateChild,
        ActivatedRouteSnapshot,
        RouterStateSnapshot
}from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
    constructor(private router:Router,private authService:AuthService){
        
    }
    canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.isAuthenticated().then((authenticated:boolean)=>{
                if(authenticated){
                    return true;
                }else{
                    this.router.navigate(['/']);
                }
        });
    }

    canActivateChild(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route,state);
    }
}