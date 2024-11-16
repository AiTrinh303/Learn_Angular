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

  onClickValue(value: string, func: any) : void{
    this.calValue = value;
  }
}