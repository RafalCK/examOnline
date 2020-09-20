import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import questions from "../questions.json";

@Component({
  selector: "app-question-choice",
  templateUrl: "./question-choice.component.html",
  styleUrls: ["./question-choice.component.scss"],
})
export class QuestionChoiceComponent implements OnInit {
  @Input() points: number;
  @Output() public pointsChange = new EventEmitter<number>();
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
  isDisabled = false;
  answer: string;
  toast: string;

  public questionsList: {
    question: string;
    correctAnswer: string;
  }[] = questions;

  public addPoint() {
    this.pointsChange.emit(++this.points);
  }

  public checkAnswer() {
    if (this.answer === this.correctAnswer) {
      this.toast = "Prawidłowa odpowiedz, zdobywasz jeden punkt";
      this.addPoint();
    } else {
      this.toast = `Nieprawidłowa odpowiedz, poprawna to ${this.correctAnswer}`;
    }
    this.isDisabled = !this.isDisabled;
  }

  constructor() {}

  ngOnInit() {}
}
