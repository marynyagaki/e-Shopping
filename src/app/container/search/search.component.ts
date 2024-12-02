import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  ngOnInit() {
  }
  searchValue:string=''


  changesearchValue(eventData:any){
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue=(<HTMLInputElement>eventData.target).value;

  }

}
