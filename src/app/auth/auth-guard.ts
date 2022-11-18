import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return this.authService.isLoggedInOnServer().pipe(
    //   map((result) => {
    //     if (!result) {
    //       window.location.assign(environment.loginURL);
    //     }
    //     return result;
    //   })
    // );
    // let isAuthAWS = this.authService.isLoggedInOnCognito(); // check login status of user on Cognito

    // return combineLatest([isAuthServer, isAuthAWS]).pipe(
    //   tap((data) => console.log('status of bothside::', data)),
    //   map((data) => {
    //     const [isServer, isAws] = data;
    //     if (!isServer && !isAws) {
    //       this.router.navigate(['signin']);
    //     }
    //     return isServer || isAws;
    //   })
    // );
    return of(true);
  }
}
