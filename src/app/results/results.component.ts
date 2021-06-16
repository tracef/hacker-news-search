import { Component, OnInit } from '@angular/core';
import { HitsEntity, SearchResults } from 'src/interfaces/SearchResults';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  searchResults: SearchResults|null = null;
  hits: HitsEntity[]|null|undefined = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchResults = this.searchService.searchResults;

    if(this.searchResults){
      this.hits = this.searchResults.hits??[];
    }
  }
}
