import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  servicio = inject(LoginService);
  email: any;
  password: any;
  passwordFieldType: string = 'password';
  userRole: string = ''; // Variable para almacenar el rol del usuario

  constructor(private router: Router) {}

  ngOnInit() {
    // Al inicializar el componente, obtener el rol del usuario desde el almacenamiento local
    this.userRole = localStorage.getItem('role') || '';
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(response => {
      if (response.accessToken) {
        localStorage.setItem('token', 'true');
        localStorage.setItem('role', response.user.role);
        this.userRole = response.user.role; // Actualizar el rol del usuario en el componente
        console.log('Logged in with role:', response.user.role);
        this.router.navigate(['/home']); // Navegar a la página de inicio después del inicio de sesión exitoso
      }
    });
  }
}
