import {Component} from '@angular/core';

@Component({
  selector: 'app-skills-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <app-user-list></app-user-list>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ausy Skills Application';
}
