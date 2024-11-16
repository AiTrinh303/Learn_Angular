import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneratorComponent } from './generator/generator.component';
import {ColorChromeModule} from 'ngx-color/chrome'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, GeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-meme';
}
