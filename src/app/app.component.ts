import { Component, OnInit } from '@angular/core';
import { WebServiceService } from './services/web.service.service'; // Import the missing WebApiService class


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Excel-json';

  ngOnInit(): void {}
  
  constructor(
    private webApiService: WebServiceService,
  ) { }

  addProduct() {

    console.log('file upload!');

    const data = "Hello from the front end!"

    this.webApiService.callToApi(data).subscribe({
      next: () => {
        console.log('Success!');
      }
    })

    console.log('Went to the API!'); 
  }
}
