import { Component, ViewChild } from '@angular/core';
import {ColorChromeModule} from 'ngx-color/chrome';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [ ColorChromeModule,FormsModule],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.css'
})
export class GeneratorComponent {
  @ViewChild('memeCanvas', {static:false}) myCanvas:any;

  preview(e:any){
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');
    let render = new FileReader();
    render.readAsDataURL(e.tar)
  }
}
