import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import questions from '../questions.json';

@Component({
  selector: "app-question-multi",
  templateUrl: "./question-multi.component.html",
  styleUrls: ["./question-multi.component.scss"],
})
export class QuestionMultiComponent implements OnInit {
  selectedValues: string[] = [];
  toArray: string;
  toast: string;
  isDisabled = false;
  @Input() points: number;
  @Output() public pointsChange = new EventEmitter<number>();
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

  // NBA masz taka sama metode w question choice, albo serwis albo dziedziczenie
  public addPoint() {
    this.pointsChange.emit(++this.points);
  }

  // NBA kod tutaj też się powtarza z tym w klasie question choice tutaj jest dobra opcja na zastosowanie LSP
  // czyli dziedzicznie + polimorfizm. Tak wiem że to wydaje się trudne i przecież tylko wspominałem
  // Ale dużo problemów tym rozwiązujesz i nie jest wcale trudniejsze od reszty
  checkAnswer() {
    this.toArray = this.selectedValues.toString();
    if (
      this.toArray === this.correctAnswer ||
      this.toArray === this.correctAnswer2
    ) {
      this.toast = "Prawidłowa odpowiedz, zdobywasz jeden punkt";
      this.addPoint();
    } else {
      this.toast = `Nieprawidłowa odpowiedz, poprawna to ${this.correctAnswer} lub ${this.correctAnswer2} `;
    }
    this.isDisabled = !this.isDisabled;
  }

  // NBA puste metody aj aj aj

  constructor() {}

  ngOnInit() {}
}
