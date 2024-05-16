import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  ocultar = localStorage.getItem('token')
  


  cerrar(){
    //localStorage.setItem("token", 'false')
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    window.location.href='login'
  }

}