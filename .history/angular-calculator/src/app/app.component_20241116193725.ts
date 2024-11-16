import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-calculator';
  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'noValue';

  onClickValue(val: string, type: any) {
    if (type == 'number'){
      this.onNumberClick(val);
    }

  }

  onNumberClick(val: string) {
    if(this.calNumber != 'noValue'){
      this.calNumber = this.calNumber + val;
    }
    else{
      this.calNumber = val;
    }
    this.calValue = parseInt(this.calNumber);
  }
}