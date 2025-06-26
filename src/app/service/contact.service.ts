import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://api.sheety.co/65cab4503829bb9a5ac0b4513477b06c/darpanDasaniPortfolio/sheet1'; 


  constructor(private http:HttpClient) {}
  sendContactForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
