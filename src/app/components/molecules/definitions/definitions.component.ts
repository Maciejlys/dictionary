import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SynonymsComponent } from '../synonyms/synonyms.component';
import { Definition } from '../../../models/definition.model';

@Component({
  selector: 'app-definitions',
  standalone: true,
  imports: [CommonModule, SynonymsComponent],
  template: `
    <ul>
      <li *ngFor="let definition of definitions">
        {{ definition.definition }}
      </li>
    </ul>
  `,
  styleUrls: ['./definitions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefinitionsComponent {
  @Input({ required: true }) definitions!: Definition[];
}
