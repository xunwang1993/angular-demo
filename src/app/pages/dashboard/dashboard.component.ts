import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  keyword = 'name';
  data = [
    {
      id: 1,
      name: 'Movie A',
    },
    {
      id: 2,
      name: 'Movie B',
    },
  ];

  constructor(private httpClient: HttpClient) { }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

  onSubmit(): void {
    // TODO: submit action
    this.httpClient.post('/xxxxx/', {

    }).subscribe(res => {
      // TODO: handle response
    }, err => {
      // TODO: handle error
    });


  }
}
