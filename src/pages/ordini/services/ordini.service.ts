import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { PostDto } from '../dtos/post.dto';
import { map, Observable, of, tap } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class OrdiniService {
    private _httpClient = inject(HttpClient);

    public getOrdiniStatus(): Observable<string[]> {
      const stati = ['In preparazione', 'Spedito', 'Consegnato'];
      return of(stati);
    }

    public getOrdini(): Observable<Post[]> {
        return this._httpClient.get<PostDto[]>('https://jsonplaceholder.typicode.com/posts')
        .pipe(
          // solo per simulare una data in stringa
          map((data: PostDto[]) => data.map(item => {
            return {
              ...item,
              dataCreazioneStr: new Date().toISOString()
            };
          })),
          map((data: PostDto[]) => data.slice(0, 10)),
          // trasformiamo la data da stringa a date
          map((data: PostDto[]) => data.map(item => {
            return {
              body: item.body,
              id: item.id,
              title: item.title,
              userId: item.userId,
              dataCreazione: new Date(item.dataCreazioneStr)
            } as Post;
          }))
        );
    }
}
