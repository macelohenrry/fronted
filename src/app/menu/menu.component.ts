import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Stats', icon: 'fa-bar-chart' },
      { label: 'Calendar', icon: 'fa-calendar' },
      { label: 'Documentation', icon: 'fa-book' },
      { label: 'Support', icon: 'fa-support' },
      { label: 'Social', icon: 'fa-twitter' }
    ];
  }
}
