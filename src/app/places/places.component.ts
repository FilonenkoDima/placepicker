import { Component, input, output } from '@angular/core';

import { Place } from './places.model';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
})
export class PlacesComponent {
  places = input.required<Place[]>();
  selectPlace = output<Place>();

  onSelected(place: Place) {
    this.selectPlace.emit(place);
  }
}
