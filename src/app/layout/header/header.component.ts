import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { navigationItems } from '../../data/site.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly navigationItems = navigationItems;
  readonly mobileMenuOpen = signal(false);
  readonly imageError = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  handleLogoError(): void {
    this.imageError.set(true);
  }
}
