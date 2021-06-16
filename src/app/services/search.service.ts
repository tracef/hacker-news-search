import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SearchResults } from 'src/interfaces/SearchResults';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults: SearchResults | null = null;
  history: string[] = [];

  constructor(private http: HttpClient) {
    this.loadSearchResults();
    this.loadHistory();
  }

  angoliaAPI(query: string): Observable<any> {
    return this.http.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .pipe(
        map(response=>{
          return response;
        }),
        catchError(error=>{
          return throwError(error);
        })
      );
  }

  saveHistory(query: string) {
    this.history.push(query);
    localStorage.setItem('history', JSON.stringify(this.history));
  }

  saveSearchResults(sr: SearchResults) {
    this.searchResults = sr;
    localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
  }

  loadSearchResults() {
    const searchResultsStr = localStorage.getItem('searchResults');

    if (searchResultsStr) {
      this.saveSearchResults(JSON.parse(searchResultsStr));
    }
  }

  loadHistory() {
    const historyStr = localStorage.getItem('history');

    if (historyStr) {
      this.history = JSON.parse(historyStr);
    }
  }
}
