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

  calNumber: string = 'anyValue';

  onClickValue(val: string, type: any) {
    if (type == 'number'){
      this.onNumberClick(val);
    }

  }

  onNumberClick(val: string) {
    if(this.calNumber != '')
  }
}