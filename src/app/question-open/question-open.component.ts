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

  @Input() receivedParentMessage: string;
  answer: string;
  toast: string;
  public questionsList: {
    question: string;
    correctAnswer: string;
  }[] = questions;

  // Get value from input
  inputAnswer(event: any) {
    this.answer = event.srcElement.value;
  }

  //Sprawdzanie czy odpowiedz z inputa jest równa poprawnej odpowiedzi z JSON-a jesli tak to komunikat toast jesli nie to inny
  checkAnswer() {
    if (this.answer === this.correctAnswer) {
      this.toast = "Prawidłowa odpowiedz, brawo zdobywasz punkt";
    } else {
      this.toast = "Nieprawidłowa odpowiedz";
    }
  }

  myFunctionOne() {
    console.log("Call Function One from Component One");
  }

  constructor() {}

  ngOnInit() {}
}
