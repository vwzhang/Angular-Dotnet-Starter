import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from './interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private apiURL = '/typedResults/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(todo: Todo): Observable<any> {
    return this.httpClient.post(this.apiURL, JSON.stringify(todo), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
    )
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: number, item: Todo): Observable<any> {
    return this.httpClient.put(this.apiURL + id, JSON.stringify(item), this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.apiURL + id, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    return throwError(errorMessage);
  }
}
