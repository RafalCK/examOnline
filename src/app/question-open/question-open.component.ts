import { Component, OnInit, Input } from "@angular/core";
import questions from "../questions.json";

@Component({
  selector: "app-question-open",
  templateUrl: "./question-open.component.html",
  styleUrls: ["./question-open.component.scss"],
})
export class QuestionOpenComponent implements OnInit {
  // Przekazujemy do kompoentu z JSON-a poprawna odpowiedź
  @Input() correctAnswer: string;
  answer: string;
  toast: string;
  public questionsList: {
    question: string;
    correctAnswer: string;
  }[] = questions;

  // Get value from input
  inputAnswer(event: any) {
    this.answer = event.srcElement.value;
    localStorage.setItem(`answer`, `${this.answer}`);
  }

  checkAnswer() {
    if (
      this.answer === this.correctAnswer ||
      this.answer === this.correctAnswer.toUpperCase() ||
      this.answer === this.correctAnswer.toLowerCase()
    ) {
      this.toast = "Prawidłowa odpowiedz, brawo zdobywasz punkt";
      console.log(this.answer);
    } else {
      this.toast = "Nieprawidłowa odpowiedz";
      console.log(this.answer);
    }
  }

  constructor() {}

  ngOnInit() {}
}
