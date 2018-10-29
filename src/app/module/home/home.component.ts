import { Component, OnInit } from '@angular/core';

import { Suggests } from './service/listSuggest';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  suggests = Suggests;

  constructor() { }

  ngOnInit() {
  }

}
