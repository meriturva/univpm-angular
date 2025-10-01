import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { PostDto } from '../dtos/post.dto';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdiniService {
    private _httpClient = inject(HttpClient);

    public getOrdini(): Observable<PostDto[]> {
        return this._httpClient.get<PostDto[]>('https://jsonplaceholder.typicode.com/posts')
        .pipe(
          map((data: PostDto[]) => data.map(item => {
            return {
              ...item,
              dataCreazione: new Date().toISOString()
            };
          })),
          tap(data => console.log('Fetched ordini:', data)),
          map((data: PostDto[]) => data.slice(0, 10))
        );
    }
}
