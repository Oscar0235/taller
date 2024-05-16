import { CanActivateFn } from '@angular/router';

export const privadoGuard: CanActivateFn = (route, state) => {
  
  if(localStorage.getItem('token') == 'true'){
    return false
  }else{
    return true;
  }
};
