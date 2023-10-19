import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-synonyms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex">
      <p>Synonyms</p>
      <span *ngFor="let synonym of synonyms">{{ synonym }}</span>
    </div>
  `,
  styleUrls: ['./synonyms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SynonymsComponent {
  @Input({ required: true }) synonyms!: string[];
}
