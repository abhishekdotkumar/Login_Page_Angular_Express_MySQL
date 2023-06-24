import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getUserDetails(): any {
    return this.http.get(this.apiUrl+'/get-details');
  }
}
