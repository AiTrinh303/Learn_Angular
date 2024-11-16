import { Component } from '@angular/core';
import {ColorChromeModule} from 'ngx-color/chrome';
import {FormsModule}

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [ ColorChromeModule],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.css'
})
export class GeneratorComponent {

}
