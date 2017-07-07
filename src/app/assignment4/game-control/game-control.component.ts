import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() incrementCount = new EventEmitter<number>();
  interval;
  count = 1;

  constructor() { }

  ngOnInit() {
  }

  startCount() {
    this.incrementCount.emit(this.count);
    this.count++;
  }

  startGame() {
    this.interval = setInterval(() => this.startCount(), 1000);
  }

  pauseGame() {
    clearInterval(this.interval)
  }
}
