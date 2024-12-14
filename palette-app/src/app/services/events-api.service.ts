import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {
  
http: HttpClient = inject(HttpClient);
  private readonly API_URL = 'https://www.eventbriteapi.com/v3';
  private readonly TOKEN = 'F7RDUMQGB6T2A7J3IOTC';
  constructor() { 
    
  }

  getEvents(location: string, category: string): Observable<any> {
    const params = new HttpParams()
      .set('address.city', location) // User's location
      .set('categories', category)      // Art category ID
      .set('token', this.TOKEN);        // OAuth Token

    return this.http.get(`${this.API_URL}/events/search/`, { params });
  }
}

