import { CanActivateFn, CanMatchFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('token') === 'true';
};

export const registroGuard: CanMatchFn = (route, state) => {
  return localStorage.getItem('token') !== 'true';
};

const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (route, state) => {
    const userRole = localStorage.getItem('role');
    console.log('userRole:', userRole);  
    if (!userRole) {
      return false;
    }
    return allowedRoles.includes(userRole);
  };
};

export const adminGuard: CanActivateFn = roleGuard(['administradores']);
export const usuarioGuard: CanActivateFn = roleGuard(['usuario']);
export const invitadoGuard: CanActivateFn = roleGuard(['visitante']);


export const contactosGuard: CanActivateFn = (route, state) => {
  return (invitadoGuard(route, state) || usuarioGuard(route, state) || adminGuard(route, state));
};

export const carroGuard: CanActivateFn = (route, state) => {
  return (usuarioGuard(route, state) || adminGuard(route, state)) && !invitadoGuard(route, state);
};