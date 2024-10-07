import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopComponent } from "./components/top/top.component";

import { PernasComponent } from "./components/pernas/pernas.component";
import { SmallCardComponent } from './components/small-card/small-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopComponent,  PernasComponent,SmallCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bomba_figma';
}
