import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg (click)="play()">
      <circle cx="41" cy="41" r="37" stroke-width="1"></circle>
      <polygon fill="" stroke-width="1" points="32,25 32,58 60,42"></polygon>
    </svg>
  `,
  styleUrls: ['./audio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioButtonComponent implements OnInit {
  @Input({ required: true }) src!: string;
  audio = new Audio();

  ngOnInit(): void {
    this.audio.src = this.src;
  }

  play() {
    this.audio.load();
    this.audio.play();
  }
}
