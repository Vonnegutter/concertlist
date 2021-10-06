import { Component, OnInit } from '@angular/core';
import { CONCERTS } from '../mock-concerts';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  concerts = CONCERTS;

  constructor() { }

  ngOnInit(): void {
  }

}
