import { Component, OnInit } from "@angular/core";
import questions from "../questions.json";

@Component({
  selector: "app-exam-result",
  templateUrl: "./exam-result.component.html",
  styleUrls: ["./exam-result.component.scss"],
})
export class ExamResultComponent implements OnInit {
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

  answer = localStorage.getItem(`answer`);
  answer2 = localStorage.getItem(`answer2`);
  constructor() {}

  ngOnInit(): void {}
}
