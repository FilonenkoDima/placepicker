import { Component, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { Place } from '../places.model';
import { PlacesComponent } from '../places.component';

@Component({
  selector: 'app-available-places',
  standalone: true,
  imports: [PlacesContainerComponent, PlacesComponent],
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
})
export class AvailablePlacesComponent {
  places = signal<Place[] | undefined>(undefined);
}
