import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../logo/logo.component';
import { ThemeSwitchComponent } from '../../theme-switch/theme-switch.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, ThemeSwitchComponent],
  template: `
    <div class="header">
      <app-logo></app-logo>
      <app-theme-switch> </app-theme-switch>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
