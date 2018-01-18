import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import {Tabs} from '../../../app.declarations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() tabs: Tabs;

  constructor() {
  }

  ngOnInit() {
  }
}
