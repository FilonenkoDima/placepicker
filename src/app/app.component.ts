import { Component } from '@angular/core';
import { AvailablePlacesComponent } from './places/available-places/available-places.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvailablePlacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'placepicker';
}
