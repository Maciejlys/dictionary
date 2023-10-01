import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Defnition } from '../models/definition.model';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(private http: HttpClient) {}

  getDefinition(word: string) {
    return this.http
      .get<Array<Defnition>>(`http://localhost:8000/api/v2/entries/en/${word}`)
      .pipe(
        map((data) => data[0]),
        tap((x) => console.log(x))
      );
  }
}
