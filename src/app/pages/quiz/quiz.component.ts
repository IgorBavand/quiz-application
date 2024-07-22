import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/core/question.dto';
import { Alternative } from 'src/app/core/alternative.dto';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion!: Question;
  userAnswer: string = '';
  showNextButton: boolean = false;
  correctAlternative?: Alternative;

  constructor(private http: HttpClient, private service: QuizService) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.service.getQuestions().subscribe((data) => {
      this.questions = data;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    });
  }

  submitAnswer(): void {
    this.service.getCorrectAlternative(this.currentQuestion.id).subscribe((data) => {
      this.correctAlternative = data;
    });
    this.showNextButton = true;
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.showNextButton = false;
      this.userAnswer = '';
      this.correctAlternative = undefined;
    } else {
      alert('Você completou o quiz!');
    }
  }
}
