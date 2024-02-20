import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  constructor(private http: HttpClient) { }

  baseApiUrl: string = 'https://localhost:5001/api/WebControllers';

  apiUrl: string = 'https://localhost:44326/api/WebControllers/Ping'

  uploadUrl : string = 'https://localhost:44326/api/WebControllers/SubirArchivo';
  

  callToApi(data: string): Observable<string> {
    debugger;
    data = "osvi";
    return this.http.post<string>(this.apiUrl, data);
  }

  uploadFile(file: FormData): Observable<string> {
    console.log('inside the controller!');
    console.log(file);

    return this.http.post<string>(this.uploadUrl, file);
  }
}
