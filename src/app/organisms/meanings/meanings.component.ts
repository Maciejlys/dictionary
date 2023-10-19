import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meaning } from '../../models/meaning.model';
import { DefinitionsComponent } from '../../components/molecules/definitions/definitions.component';
import { SynonymsComponent } from '../../components/molecules/synonyms/synonyms.component';

@Component({
  selector: 'app-meanings',
  standalone: true,
  imports: [CommonModule, DefinitionsComponent, SynonymsComponent],
  template: `
    <div *ngFor="let meaning of meanings">
      <p class="line-after">
        <strong>
          {{ meaning.partOfSpeech }}
        </strong>
      </p>
      <p class="meaning">Meaining</p>
      <app-definitions [definitions]="meaning.definitions"></app-definitions>
      <app-synonyms
        *ngIf="meaning.synonyms.length"
        [synonyms]="meaning.synonyms"
      ></app-synonyms>
    </div>
  `,
  styleUrls: ['./meanings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeaningsComponent {
  @Input({ required: true }) meanings!: Meaning[];
}
