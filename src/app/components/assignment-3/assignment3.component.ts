import { Component } from '@angular/core';

@Component({
  selector: 'assignment-3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .manyItems {
      color: white;
    }
  `]
})
export class Assignment3Component {
  isDisplayed = false;
  count = 0;
  clicks = [];

  toggleDetails() {
    this.count += 1;
    this.isDisplayed = !this.isDisplayed;
    this.clicks.push(this.count);
  }

  setColor(click) {
      return click > 4 ? 'lightblue' : 'none';
  }
}
