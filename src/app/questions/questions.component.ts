import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import questions from '../questions.json';

// NBA da sie ten interfejs zrobic lepiej
export interface Question {
  subjectId: string;
  type: string;
  question: string;
  correctAnswer: string;
  correctAnswer2: string;
  label1: string;
  label2: string;
  label3: string;
  label4: string;
}

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent implements OnInit {
  @Input() subjectId: number;

  public questionsList: Question[] = questions;

  answer: string;
  points = 0;
  mark: string;
  numberQuestion: number = 10;


  constructor(private route: Router) {}

  receivePoints($event) {
    this.points = $event;
    console.log(this.points);
    console.log(this.numberQuestion);
  }
  getMark() {
    let markPoints = 0;
    markPoints = this.points/this.numberQuestion;
    if (markPoints >= 0 && markPoints <= 0.29) {
      this.mark = "Niedostateczny (1)";
  }
  else if (markPoints >= 0.3 && markPoints <= 0.5) {
    this.mark = "Dopuszczający (2)";
  }
  else if (markPoints >= 0.51 && markPoints <= 0.74) {
  this.mark = "Dostateczny (3)";
  }
  else if (markPoints >= 0.75 && markPoints <= 0.9) {
  this.mark = "Dobry (4)";
  }
  else if (markPoints >= 0.91 && markPoints <= 0.99) {
    this.mark = "Bardzo dobry (5)";
  }
  else if (markPoints == 1) {
    this.mark = "Celujący (6)";
  }
  console.log(markPoints);
  console.log(this.mark);
}

  // getMark() {
  //   // NBA Na sline zrobione, a gdyby egzamin mial 54 pytania to bys od 4/54 juz dawal zaliczenie?
  //   switch (this.points) {
  //     case 0:
  //       this.mark = "Niedostateczny (1)";
  //       break;
  //     case 1:
  //       this.mark = "Niedostateczny (1)";
  //       break;
  //     case 2:
  //       this.mark = "Dopuszczający (2)";
  //       break;
  //     case 3:
  //       this.mark = "Dopuszczający plus (2+)";
  //       break;
  //     case 4:
  //       this.mark = "Dostateczny (3)";
  //       break;
  //     case 5:
  //       this.mark = "Dostateczny plus (3+)";
  //       break;
  //     case 6:
  //       this.mark = "Dobry (4)";
  //       break;
  //     case 7:
  //       this.mark = "Dobry plus (4+)";
  //       break;
  //     case 8:
  //       this.mark = "Bardzo dobry (5)";
  //       break;
  //     case 9:
  //       this.mark = "Bardzo dobry plus (5+)";
  //       break;
  //     case 10:
  //       this.mark = "Celujący (6)";
  //       break;
  //     default:
  //       this.mark = "Nie uzyskano odpowiedzi";
  //       break;
  //   }
  // }

  goToMainPage() {
    this.route.navigate(["/egzamin"]);
  }

  ngOnInit() {
    // NBA Pytania pytaniami ale tutaj powinno byc bardziej EXAMS.JSON i egzaminy wraz z linkami do obrazka nazwa i pytaniami w srodku
    // Bardziej tak to wyglada w realnym systemie bo nie masz przeciez na sztywno egzaminow tylko mozna je dodawac tworzyc pytania itd
    // Ogolnie brakuje mi takiego cruda, te pytania moglbys ladowac po prostu z JSONA do storage i tam modifikowac w sensie dodawac pytanie
    // Zmieniac itd ofc by to szlo do kosza przy wylaczeniu
    this.questionsList = (<Question[]>questions).filter(
      (i) => i.subjectId === this.subjectId.toString()
    );
  }
}
