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
  value1: string;
  value2: string;
  value3: string;
  value4: string;
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
  filtervalues = [];
  answerArray = [];
  points = 0;
  mark: string;

  constructor(private route: Router) {}

  receivePoints($event) {
    this.points = $event;
  }

  getMark() {
    // NBA Na sline zrobione, a gdyby egzamin mial 54 pytania to bys od 4/54 juz dawal zaliczenie?
    switch (this.points) {
      case 0:
        this.mark = "Niedostateczny (1)";
        break;
      case 1:
        this.mark = "Niedostateczny (1)";
        break;
      case 2:
        this.mark = "Dopuszczający (2)";
        break;
      case 3:
        this.mark = "Dopuszczający plus (2+)";
        break;
      case 4:
        this.mark = "Dostateczny (3)";
        break;
      case 5:
        this.mark = "Dostateczny plus (3+)";
        break;
      case 6:
        this.mark = "Dobry (4)";
        break;
      case 7:
        this.mark = "Dobry plus (4+)";
        break;
      case 8:
        this.mark = "Bardzo dobry (5)";
        break;
      case 9:
        this.mark = "Bardzo dobry plus (5+)";
        break;
      case 10:
        this.mark = "Celujący (6)";
        break;
      default:
        this.mark = "Nie uzyskano odpowiedzi";
        break;
    }
  }

  public getAnswer(answer: any): void {
    console.log("Podaje odpowiedź:", answer);
    this.answer = answer;
    this.answerArray.push(this.answer);
    console.log(this.answerArray);
  }

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
