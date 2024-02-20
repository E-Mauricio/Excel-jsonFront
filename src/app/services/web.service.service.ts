import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  //baseApiUrl: string = 'https://localhost:5001/api/WebControllers';

  endPoint : string = this.baseApiUrl + '/api/WebControllers/SubirArchivo';

  uploadFile(file: FormData): Observable<string> {
    console.log('inside the controller!');
    console.log(file);

    return this.http.post<string>(this.endPoint, file);
  }
}
