import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordDefninition } from '../models/word-definition.model';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(private http: HttpClient) {}

  getDefinition(word: string) {
    const domain = origin.includes('localhost')
      ? 'http://localhost:8000'
      : 'https://api.dictionaryapi.dev';
    return this.http
      .get<Array<WordDefninition>>(domain + '/api/v2/entries/en/' + word)
      .pipe(
        map((data) => data[0]),
        tap((x) => console.log(x))
      );
  }
}
