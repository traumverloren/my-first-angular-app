import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evens: number[] = [];
  odds: number[] = [];

  onIncrement(count: number) {
    count % 2 === 0 ? this.evens.push(count) : this.odds.push(count)
  }

  // username: string;
  //
  // clearInput() {
  //   this.username = ""
  // }
}
