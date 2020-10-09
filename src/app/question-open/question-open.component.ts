import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: "app-question-open",
  templateUrl: "./question-open.component.html",
  styleUrls: ["./question-open.component.scss"],
})
export class QuestionOpenComponent{
  @Input() correctAnswer: string;
  @Input() points: number;
  @Output() public pointsChange = new EventEmitter<number>();
  answer: string;
  toast: string;
  isDisabled = false;

  // NBA Znowu sie powtarza kod

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
}
