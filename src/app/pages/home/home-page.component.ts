import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { siteConfig, timelineMilestones } from '../../data/site.data';
import { SiteMetaService } from '../../core/site-meta.service';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { AnniversarySectionComponent } from '../../sections/anniversary/anniversary-section.component';
import { BrandArchitectureSectionComponent } from '../../sections/brand-architecture/brand-architecture-section.component';
import { ComplianceSectionComponent } from '../../sections/compliance/compliance-section.component';
import { EngineeringSectionComponent } from '../../sections/engineering/engineering-section.component';
import { FinalCtaSectionComponent } from '../../sections/final-cta/final-cta-section.component';
import { HeroSectionComponent } from '../../sections/hero/hero-section.component';
import { TechnologyFoundationSectionComponent } from '../../sections/technology-foundation/technology-foundation-section.component';
import { TimelineSectionComponent } from '../../sections/timeline/timeline-section.component';
import { XbosSectionComponent } from '../../sections/xbos/xbos-section.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSectionComponent,
    AnniversarySectionComponent,
    TimelineSectionComponent,
    EngineeringSectionComponent,
    TechnologyFoundationSectionComponent,
    BrandArchitectureSectionComponent,
    XbosSectionComponent,
    ComplianceSectionComponent,
    FinalCtaSectionComponent,
    FooterComponent,
    ScrollTopComponent
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  readonly timelineMilestones = timelineMilestones;
  readonly showAnniversary = siteConfig.showAnniversary;
  private readonly siteMetaService = inject(SiteMetaService);

  constructor() {
    this.siteMetaService.applyHomeMetadata();
  }
}
