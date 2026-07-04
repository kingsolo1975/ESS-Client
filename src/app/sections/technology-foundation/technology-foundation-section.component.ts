import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technology-foundation-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology-foundation-section.component.html'
})
export class TechnologyFoundationSectionComponent {
  readonly stackItems = [
    'Angular',
    'Tailwind CSS',
    'Spring Boot',
    'R2DBC',
    'SQL Server',
    'Cloudflare Pages',
    'GitHub CI/CD',
    'API-first Architecture',
    'Audit & Observability',
    'Modular Studio Architecture'
  ];
}
