import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Feature } from '../../models/feature.model';

@Component({
  selector: 'app-feature-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-cards.component.html'
})
export class FeatureCardsComponent {
  readonly features = input.required<Feature[]>();
}
