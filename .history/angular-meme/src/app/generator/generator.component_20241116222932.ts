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
  topText: string = '';

  writeText(){
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');
    ctx.fillText(this.topText, canvas.width)
  }


  @ViewChild('memeCanvas', {static:false}) myCanvas:any;

  preview(e:any){
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');
    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);

    render.onload = function (event) {
      const img = new Image();
      console.log(img);
      img.src = event.target?.result as string;
      img.onload = function () {
        ctx.drawImage(img, 50, 150, 600, 800)
      }
    }
  }
}
