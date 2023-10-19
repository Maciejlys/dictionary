import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';
import { ThemeService } from './services/theme.service';
import { FormControl } from '@angular/forms';
import { DictionaryService } from './services/dictionary.service';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WordDefninition } from './models/word-definition.model';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div [class]="themeService.theme()">
      <div class="app">
        <app-header></app-header>
        <main>
          <app-input
            (enter)="getDefinition()"
            [control]="searchControl"
          ></app-input>
          <ng-container *ngIf="definition$ | async as definition">
            <ng-container *ngIf="definition">
              <app-term-with-phonetic
                [word]="definition.word"
                [phonetic]="definition.phonetics"
              >
              </app-term-with-phonetic>
              <app-meanings [meanings]="definition.meanings"></app-meanings>
            </ng-container>
          </ng-container>
        </main>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  dictionaryService = inject(DictionaryService);
  themeService = inject(ThemeService);
  searchControl = new FormControl();
  definition$ = new Observable<WordDefninition>();

  getDefinition() {
    this.definition$ = this.dictionaryService.getDefinition(
      this.searchControl.value
    );
  }
}
