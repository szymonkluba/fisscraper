import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.scss']
})
export class ScraperComponent implements OnInit {

  links = ['single-race'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }
}
