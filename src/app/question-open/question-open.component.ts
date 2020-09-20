import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import questions from "../questions.json";

@Component({
  selector: "app-question-open",
  templateUrl: "./question-open.component.html",
  styleUrls: ["./question-open.component.scss"],
})
export class QuestionOpenComponent implements OnInit {
  @Input() correctAnswer: string;
  @Input() points: number;
  @Output() public pointsChange = new EventEmitter<number>();
  answer: string;
  toast: string;
  isDisabled = false;

  public addPoint() {
    this.pointsChange.emit(++this.points);
  }

  checkAnswer() {
    if (
      this.answer === this.correctAnswer ||
      this.answer === this.correctAnswer.toUpperCase() ||
      this.answer === this.correctAnswer.toLowerCase()
    ) {
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
