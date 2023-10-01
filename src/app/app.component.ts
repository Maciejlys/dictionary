import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ThemeService } from './services/theme.service';
import { FormControl } from '@angular/forms';
import { DictionaryService } from './services/dictionary.service';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Defnition } from './models/definition.model';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div class="app" [class]="themeService.theme()">
      <app-header></app-header>
      <main>
        <app-input
          (enter)="getDefinition()"
          [control]="searchControl"
        ></app-input>
        <ng-container *ngIf="definition$ | async as definition">
          <app-term-with-phonetic
            [word]="definition.word"
            [phonetic]="definition.phonetics"
          ></app-term-with-phonetic>
        </ng-container>
      </main>
      <footer></footer>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  dictionaryService = inject(DictionaryService);
  themeService = inject(ThemeService);
  searchControl = new FormControl();
  definition$ = new Observable<Defnition>();

  getDefinition() {
    this.definition$ = this.dictionaryService.getDefinition(
      this.searchControl.value
    );
  }
}
