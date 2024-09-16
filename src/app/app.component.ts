import { Component } from '@angular/core';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApoliceSeguroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atividade 4';
}
