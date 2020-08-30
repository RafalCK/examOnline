import { Component, OnInit } from "@angular/core";
import questions from "../questions.json";
import { Router } from "@angular/router";
import { EQuestionType } from "./question.enum";

export interface QuestionModel {
  type: EQuestionType;
  question: string;
}

export interface QuestionOpenModel extends QuestionModel {
  correctAnswer: string;
  type: EQuestionType.open;
}

export interface QuestionChoice extends QuestionModel {
  correctAnswer: string;
  labels: string[];
  type: EQuestionType.choice;
}

export interface QuestionMulti extends QuestionModel {
  correctAnswers: string[];
  labels: string[];
  type: EQuestionType.multi;
}

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent implements OnInit {
  public questionsList: {
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
  }[] = questions;

  answer: string;
  answerArray = [];
  points = 0;
  mark: string;

  receivePoints($event) {
    this.points = $event;
  }

  getMark() {
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

  constructor(private route: Router) {}

  ngOnInit() {}
}
