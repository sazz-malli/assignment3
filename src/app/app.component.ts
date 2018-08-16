import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  .paintColor {
    color: white;
  }

  .container {
      text-align: center;
  }
    `]
})
export class AppComponent {
  title = 'app';
  string = '';
  stringDisplayFlag = false;
  // valArray : number[] = [0];
  valArray = [];
  counts: number = 0;

  getData() {
    if (!this.stringDisplayFlag) {
      this.stringDisplayFlag = true;
      this.counts = this.counts + 1;
      this.valArray.push(this.counts);
      return this.string = 'Secret Password = tuna';
    } else {
      this.stringDisplayFlag = false;
      this.counts = this.counts + 1;
      this.valArray.push(this.counts);
      return this.string = '';
    }

  }

  getColor() {
    return 'blue';
  }

}
