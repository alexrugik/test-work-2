import {Component} from '@angular/core';
import {TABS} from './app.const';
import {Tabs} from './app.declarations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private tabs: Tabs[] = TABS;
}
