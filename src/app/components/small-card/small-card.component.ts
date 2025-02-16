import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input()
  photo: string = ""

  @Input()
  titulo: string = ""
  @Input()
  nome: string = ""

  @Input()
  descricao: string = ""

}
