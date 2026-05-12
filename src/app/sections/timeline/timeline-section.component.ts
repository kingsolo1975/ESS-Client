import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Milestone } from '../../models/milestone.model';

@Component({
  selector: 'app-timeline-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-section.component.html'
})
export class TimelineSectionComponent {
  readonly milestones = input.required<Milestone[]>();
}
