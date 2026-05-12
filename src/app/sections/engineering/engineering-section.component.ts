import { Component } from '@angular/core';

import { engineeringDomains } from '../../data/site.data';
import { FeatureCardsComponent } from '../../shared/feature-cards/feature-cards.component';

@Component({
  selector: 'app-engineering-section',
  standalone: true,
  imports: [FeatureCardsComponent],
  templateUrl: './engineering-section.component.html'
})
export class EngineeringSectionComponent {
  readonly engineeringDomains = engineeringDomains;
}
