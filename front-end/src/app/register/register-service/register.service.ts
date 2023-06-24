import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  register(jsonInput) {
    return this.http.post(this.apiUrl + '/create-user', jsonInput);
  }
}
