import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchResults } from 'src/interfaces/SearchResults';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  searchForm: FormGroup = this.formBuilder.group({ searchInput: [''] });
  invalid: boolean = false;

  constructor(private formBuilder: FormBuilder, private searchService: SearchService, private router: Router) { }

  ngOnInit(): void { }

  get searchValue() {
    return this.searchForm.get('searchInput')?.value;
  }

  doSearch() {
    const query: string = this.searchValue;
    let isValid = true;
    
    if (query) {
      this.searchService.angoliaAPI(query).subscribe((results: SearchResults) => {
        if(results){
          this.searchService.saveHistory(query);
          this.searchService.saveSearchResults(results);
          this.router.navigate(['/results'])
        }else{
          isValid = false;
        }
      })
    }else{
      isValid = false;
    }

    if(!isValid){
      this.searchForm.get('searchInput')!.setErrors({'invalid': true})
    }
  }

  clearValidator(){
    this.searchForm.get('searchInput')?.clearValidators();
  }
}
