import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../core/question.dto';
import { Alternative } from '../core/alternative.dto';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/questions';

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseUrl);
  }

  getCorrectAlternative(idQuestion: number): Observable<Alternative> {
    return this.http.get<Alternative>(`${this.baseUrl}/correct/alternative/${idQuestion}`);
  }
}
