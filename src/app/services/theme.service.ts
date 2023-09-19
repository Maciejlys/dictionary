import { Injectable, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = signal<'light' | 'dark'>('light');
  theme = computed(() => this._theme());

  toggleTheme() {
    this._theme.set(this._theme() === 'light' ? 'dark' : 'light');
  }
}
