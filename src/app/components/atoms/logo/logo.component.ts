import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg viewbox="0 0 100 100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
      <path
        d="M50,25.4V79.9m0-54.5a34.06,34.06,0,0,0-18.9-5.3,34,34,0,0,0-18.8,5.3V79.9a34,34,0,0,1,18.8-5.3A34.06,34.06,0,0,1,50,79.9m0-54.5a34.06,34.06,0,0,1,18.9-5.3,34,34,0,0,1,18.8,5.3V79.9a34,34,0,0,0-18.8-5.3A34.06,34.06,0,0,0,50,79.9"
        fill="none"
        stroke="grey"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      ></path>
    </svg>
  `,
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
