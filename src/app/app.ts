import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'vip2'; // property -> {{ title }}
  name = 'Nguyễn Mạnh Tuấn';
  age = 20;

  // method -> event binding (click)
  sayHello() {
    alert('mèo méo meo');
    console.log('mèo méo meo');
  }

  delete() {
    console.log('tạch');
  }
}
