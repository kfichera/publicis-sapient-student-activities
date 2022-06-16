import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  items = ["apple", "grapes", "banana"];

  users = [
    { name: "Alex", age: 30 },
    { name: "Steff", age: 21 },
    { name: "blah", age: 100000000000000 }
  ]
}
