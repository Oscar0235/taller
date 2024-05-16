import { Component, inject } from '@angular/core';
import { NosotrosService } from '../../services/nosotros.service';
import { CommonModule } from '@angular/common';
import { TablaComponent } from '../../components/tabla/tabla.component';


@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule,TablaComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {


  servicios = inject(NosotrosService)
  nosotros: any

  ngOnInit() {
    this.servicios.getNosotros().subscribe(n => {
      this.nosotros = n
    })
  }

}
