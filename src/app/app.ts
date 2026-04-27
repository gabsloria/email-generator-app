import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from './components/hero-section/hero-section';
import { EmailGenerator } from './components/email-generator/email-generator';

@Component({
  selector: 'app-root',
  imports: [HeroSection, EmailGenerator],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('email-generator-app');
}
