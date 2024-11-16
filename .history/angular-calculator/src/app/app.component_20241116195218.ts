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

  firstNumber: number = 0;
  

  onClickValue(val: string, type: any) {
    if (type == 'number'){
      this.onNumberClick(val);
    }
    else if (type == 'function'){
      this.onFunctionClick(val);
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

  onFunctionClick(val: string) {
    if(this.funcT == 'NoFunction'){
      this.firstNumber = this.calValue;
      this.funcT = val;
      this.calNumber = 'noValue';
    }
  }
}