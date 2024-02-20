import { Component, OnInit } from '@angular/core';
import { WebServiceService } from './services/web.service.service'; // Import the missing WebApiService class
import { User } from './model/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Excel-json';
  fileName: string | undefined = undefined;
  jsonString: string = '';

  ngOnInit(): void {}
  
  constructor(
    private webApiService: WebServiceService,
  ) { }
  
  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("file", file);

        //Here i can go to my services and call the upload function
        this.webApiService.uploadFile(formData).subscribe({
          next: (json) => {
            console.log('Success!');
            console.log(json);

            //var pretty = JSON.stringify(obj, undefined, 4);

            this.jsonString = JSON.stringify(json);
          },
          error: (error) => {
            console.log(error.error);
            this.jsonString = error.error;
          }
        });
    } 
     
  }
  prettyfied(){   

    let obj = JSON.parse(this.jsonString);

    this.jsonString = JSON.stringify(obj, undefined, 4);
  }
}
