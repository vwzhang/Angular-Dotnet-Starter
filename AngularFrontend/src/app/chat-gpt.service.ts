import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {

  private apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  constructor(private http: HttpClient) { }

  getCompletion(prompt: string): Observable<string> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    };
    const body = {
      prompt: prompt,
      max_tokens: 60,
      n: 1,
      stop: ['\n']
    };
    return this.http.post(this.apiUrl, body, { headers: headers })
      .pipe(
        map(response =>
          response.toString()
        )
      );
  }
}
