import { Component, OnInit } from "@angular/core";
import questions from "../questions.json";
import { Router } from "@angular/router";

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

  goToResult() {
    this.route.navigate(["/result"]);
  }

  constructor(private route: Router) {}

  ngOnInit() {}
}
