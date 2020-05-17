import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashRandomResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotoFetcherService {

  constructor(private http: HttpClient) { }

  fetchRandomImage() {
    return this.http.get<UnsplashRandomResponse>('https://api.unsplash.com/photos/random' , {
      headers: {
        Authorization: 'Client-ID tcDIp5zk57Qp06X85Q4SbHHg5DqGosvKdgshTqBNkO8'
      },
      params: {
        query: 'India',
        orientation: 'landscape'
      }
    });
  }
}
