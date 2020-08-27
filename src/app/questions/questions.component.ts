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

  goToResult(answer: string) {
    console.log(answer);
    alert("Hello " + answer);
  }

  constructor(private route: Router) {}

  ngOnInit() {}
}
