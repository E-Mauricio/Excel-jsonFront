import { Component, OnInit } from '@angular/core';
import { WebServiceService } from './services/web.service.service'; // Import the missing WebApiService class
import { User } from './model/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newUser: User = {
    egresadoId: "",
    carreraId: 0,
    carreraNombre: "",
    correoElectronico: "",
    generacion: "",
    NombreEgresado: "",
    telefono: ""
  };

  title = 'Excel-json';

  ngOnInit(): void {}
  
  constructor(
    private webApiService: WebServiceService,
  ) { }

  addProduct() { 

    console.log('file upload!');

    const data = "Hello from the front end!"

    this.webApiService.callToApi(this.newUser).subscribe({
      next: () => {
        console.log('Success!');

        console.log(this.newUser);
      }
    })

    console.log('Went to the API!'); 
  }
}
