import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router";

export const canActivateAuth = () => {
  const inLiggedIn = inject(AuthService).isAuth;
  
  if (inLiggedIn) {
    return true;
  }

  return inject(Router).createUrlTree(['/login']);
}