import { Component, OnInit, Input } from "@angular/core";
import questions from "../questions.json";

@Component({
  selector: "app-question-choice",
  templateUrl: "./question-choice.component.html",
  styleUrls: ["./question-choice.component.scss"],
})
export class QuestionChoiceComponent implements OnInit {
  answer: string;
  toast: string;
  @Input() correctAnswer: string;
  @Input() question: string;
  @Input() value1: string;
  @Input() value2: string;
  @Input() value3: string;
  @Input() value4: string;
  @Input() label1: string;
  @Input() label2: string;
  @Input() label3: string;
  @Input() label4: string;

  public questionsList: {
    question: string;
    correctAnswer: string;
  }[] = questions;

  radioAnswerA(event: any) {
    this.answer = this.label1;
    console.log(this.answer);
  }

  radioAnswerB(event: any) {
    this.answer = this.label2;
    console.log(this.answer);
  }
  radioAnswerC(event: any) {
    this.answer = this.label3;
    console.log(this.answer);
  }
  radioAnswerD(event: any) {
    this.answer = this.label4;
    console.log(this.answer);
  }
  checkAnswer() {
    if (this.answer === this.correctAnswer) {
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
