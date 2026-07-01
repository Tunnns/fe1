import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
