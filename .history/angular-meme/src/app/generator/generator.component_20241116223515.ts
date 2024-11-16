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
  bott

  writeText(){
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.font = '50px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillText(this.topText, canvas.width/2, 100)
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