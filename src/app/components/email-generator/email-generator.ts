import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-email-generator',
  imports: [CommonModule],
  templateUrl: './email-generator.html',
  styleUrl: './email-generator.scss',
})
export class EmailGenerator {
  isOpen = false;
  selectedOption = 'Select email type';

  options = ['Onboarding', 'Check-in', 'Renewal / Retention'];

  toggleSelect() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  closeOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (!target.closest('.email-type-select')) {
      this.isOpen = false;
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isOpen = false;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleSelect();
      event.preventDefault();
    }
  }
}
