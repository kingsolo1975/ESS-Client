import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-architecture-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-architecture-section.component.html'
})
export class BrandArchitectureSectionComponent {
  readonly platformAreas = [
    'Exchange',
    'Sportsbook',
    'Brokerage',
    'White-Label Platform',
    'API Ecosystem',
    'Data Intelligence'
  ];
}
