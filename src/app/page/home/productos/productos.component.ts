import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../cards/cards.component';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
