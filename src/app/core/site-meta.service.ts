import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SiteMetaService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  applyHomeMetadata(): void {
    this.title.setTitle('EnlightenSoft | XBOS Infrastructure');
    this.meta.updateTag({
      name: 'description',
      content:
        'EnlightenSoft is a 25-year operational engineering company focused on XBOS, an enterprise-grade 3Ps platform foundation: Platform, Plug-in, Performance.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'EnlightenSoft | XBOS Infrastructure'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Operational maturity, engineering depth, and strategic platform evolution shaped into the XBOS operational backbone.'
    });
  }
}
