import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-service-after-navar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-service-after-navar.component.html',
  styleUrls: ['./home-service-after-navar.component.css']
})
export class HomeServiceAfterNavarComponent {
  isFlippedd: boolean = false; // Tracks whether the card is flipped or not
  isEnlarged: boolean = false;

  toggleFlip() {
    // Toggle the flipped state
    this.isFlippedd = !this.isFlippedd;
    this.isEnlarged = !this.isEnlarged;
  }
}
