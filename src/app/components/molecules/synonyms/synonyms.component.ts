import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-synonyms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Synonyms <span *ngFor="let synonym of synonyms">{{ synonym }}</span>
    </p>
  `,
  styleUrls: ['./synonyms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SynonymsComponent {
  @Input({ required: true }) synonyms!: string[];
}
