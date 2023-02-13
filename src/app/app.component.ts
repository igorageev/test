import { Component } from '@angular/core';
import { iChild } from "../models/child";
import { children as data } from '../data/children';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-test-project';
  children: iChild[] = data;
}
