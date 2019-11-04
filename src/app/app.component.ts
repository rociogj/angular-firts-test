import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // selector which we are going to use wherever we want it to render
  templateUrl: './app.component.html', // or template: `<p></p>` in case we want to use html tags directly
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-angular-project';
}
