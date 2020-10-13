import { Component, EventEmitter, Input, Output } from '@angular/core';

import questions from '../questions.json';


export interface Points {
  points: number;
  pointsChange: EventEmitter<number>
}

@Component({
  selector: "app-question-choice",
  templateUrl: "./question-choice.component.html",
  styleUrls: ["./question-choice.component.scss"],
})
export class QuestionChoiceComponent implements Points {
  @Input() points: number;
  @Output() pointsChange: EventEmitter<number> = new EventEmitter<number>();
  // NBA TO do interfejsu wszystko opisuje pytanie
  @Input() correctAnswer: string;
  @Input() question: string;
  // NBA Value1... Value2... Value3... Value500 w takiej sytuacji zawsze powinieneś pomyśleć czy to nie powinna być tablica
  // Bo wtedy masz value[1], value[2]... value[500] po prostu w tym momencie masz mocną korelacje między value i label więc
  // Od razu na myśl przychodzi jedna tablica obiektów { value: string; label: string } i masz jedno pole zamiast 8
  // Pomyśl jak to rozwiązać tak żeby były interfejsy dla każdego typu pytania i to wszystko w jsonie żeby się zgrało
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
}
