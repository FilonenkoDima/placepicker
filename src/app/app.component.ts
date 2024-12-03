import { Component } from '@angular/core';
import { PlacesComponent } from './places/places.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'placepicker';
}
