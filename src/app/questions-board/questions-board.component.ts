import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export enum Login {
  Name = "name",
  Surname = "surname"
}

@Component({
  selector: "app-questions-board",
  templateUrl: "./questions-board.component.html",
  styleUrls: ["./questions-board.component.scss"],
})
export class QuestionsBoardComponent implements OnInit {
  //NBA do enuma +
  name = localStorage.getItem(Login.Name);
  surename = localStorage.getItem(Login.Surname);
  answer: string;
  correctAnswer: string;
  toast: string;
  @Input() public subjectId: number;

  checkAnswers() {
    if (this.answer === this.correctAnswer) {
      this.toast = "Prawidłowa odpowiedz, brawo zdobywasz punkt";
    } else {
      this.toast = "Nieprawidłowa odpowiedz";
    }
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // tutaj nie potrzebne przypisanie do zmiennej i blad eslinta
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.subjectId = id;
  }
}
