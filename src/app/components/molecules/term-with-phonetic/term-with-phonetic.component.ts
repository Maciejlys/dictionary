import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Phonetic } from '../../../models/phonetic.model';
import { AudioButtonComponent } from '../../atoms/audio-button/audio-button.component';

@Component({
  selector: 'app-term-with-phonetic',
  standalone: true,
  imports: [CommonModule, AudioButtonComponent],
  template: `
    <div class="flex">
      <div>
        <h1 class="word">{{ word }}</h1>
        <p class="phonetic">
          {{ phoneticWord }}
        </p>
      </div>
      <app-audio-button
        *ngIf="phoneticAudioSrc"
        [src]="phoneticAudioSrc"
      ></app-audio-button>
    </div>
  `,
  styleUrls: ['./term-with-phonetic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermWithPhoneticComponent {
  @Input({ required: true }) word!: string;
  @Input({ required: true }) phonetic!: Phonetic[];

  get phoneticWord() {
    return this.phonetic.find(
      (phonetic) => typeof phonetic.text !== 'undefined'
    )?.text;
  }

  get phoneticAudioSrc() {
    return this.phonetic.find(
      (phonetic) =>
        typeof phonetic.audio !== 'undefined' && phonetic.audio != ''
    )?.audio;
  }
}
