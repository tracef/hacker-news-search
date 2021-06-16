import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: string[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.history = this.searchService.history;
  }

}
