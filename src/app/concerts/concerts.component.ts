import { Component, OnInit } from '@angular/core';
import { CONCERTS } from '../mock-concerts';
import { Concert } from '../concert';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  concerts = CONCERTS;
  selectedConcert = ;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(concert: Concert): void {
    this.selectedConcert = concert; 
  }
}
