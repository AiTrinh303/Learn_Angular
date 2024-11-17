import { Component, ViewChild } from '@angular/core';
import {ColorChromeModule} from 'ngx-color/chrome';
import {FormsModule} from '@angular/forms'
import { Color } from 'ngx-color';


// Define the interface here
interface ColorEvent {
  color: {
    hex: string;
  };
}

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [ ColorChromeModule,FormsModule],
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})

export class GeneratorComponent {
  topText: string = '';
  bottomText: string = '';
  fileEvent: any;
  textColor: string = 'black';
  backgroundColor: string = '#F9F9F9';


  @ViewChild('memeCanvas', {static:false}) myCanvas:any;

  preview(e:any){
    this.fileEvent = e;

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

  writeText(){
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.preview(this.fileEvent)
    ctx.fillStyle = this.textColor;
    ctx.font = '50px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillText(this.topText, canvas.width/2, 100);
    ctx.fillText(this.bottomText, canvas.width/2, 680);
  }

  canvasTextColor($event: ColorEvent){
    this.textColor = $event.color?.hex;
    this.writeText();
  }

  canvasBgColor($event: ColorEvent){
    this.backgroundColor = $event.color?.hex;
    this.writeText();
  }

}
