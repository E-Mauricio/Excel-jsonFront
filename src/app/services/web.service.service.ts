import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private _http: HttpClient) { }

  endPoint: string = this.baseApiUrl + '/api/Converter/SubirArchivo';

  uploadFile(file: FormData): Observable<string> {
    console.log('inside the controller!');
    console.log(file);

    return this._http.post<string>(this.endPoint, file);
  }
}
