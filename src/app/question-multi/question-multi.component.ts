import { Component, OnInit, Input } from "@angular/core";
import questions from "../questions.json";

@Component({
  selector: "app-question-multi",
  templateUrl: "./question-multi.component.html",
  styleUrls: ["./question-multi.component.scss"],
})
export class QuestionMultiComponent implements OnInit {
  selectedValues: string[] = [];
  toArray: string;
  toast: string;
  @Input() correctAnswer: string;
  @Input() correctAnswer2: string;
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
    correctAnswer2: string;
  }[] = questions;

  checkAnswer() {
    const toArray = this.selectedValues.toString();
    if (toArray === this.correctAnswer || toArray === this.correctAnswer2) {
      this.toast = "Prawidłowa odpowiedz, brawo zdobywasz punkt";
      console.log(this.correctAnswer);
      console.log(this.correctAnswer2);
      console.log(toArray);
    } else {
      this.toast = "Nieprawidłowa odpowiedz";
      console.log(this.correctAnswer);
      console.log(this.correctAnswer2);
      console.log(toArray);
    }
  }

  constructor() {}

  ngOnInit() {}
}
