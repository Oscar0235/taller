import { Component, OnInit, inject } from '@angular/core';
import { NosotrosService } from '../../services/nosotros.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, FormsModule,CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit {
  personas!: any[];
  categorias!: string[];

  filtroCategoria: string = "";
  filtroPrecioMin: number | null = null;
  filtroPrecioMax: number | null = null;

  constructor(private nosotrosService: NosotrosService) {}

  ngOnInit() {
    this.nosotrosService.getNosotros().subscribe(data => {
      this.personas = data;

      this.categorias = Array.from(new Set(this.personas.map(persona => persona.nombre)));
    });
  }
  

  aplicarFiltro() {
    this.nosotrosService.getNosotros().subscribe(data => {
      this.personas = data.filter((persona: { nombre: string; precio: number; }) =>
        (this.filtroCategoria === "" || persona.nombre === this.filtroCategoria) &&
        (this.filtroPrecioMin === null || persona.precio >= this.filtroPrecioMin!) &&
        (this.filtroPrecioMax === null || persona.precio <= this.filtroPrecioMax!)
      );
    });
  }
  
  

  limpiarFiltros() {

    this.filtroCategoria = "";
    this.filtroPrecioMin = null;
    this.filtroPrecioMax = null;

    this.nosotrosService.getNosotros().subscribe(data => {
      this.personas = data;
    });
  }
  

}
