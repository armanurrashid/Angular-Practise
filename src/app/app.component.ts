import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from './component/template-form/template-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TemplateFormComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormPractise';
}
