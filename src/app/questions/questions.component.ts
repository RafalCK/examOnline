import { Component, OnInit } from "@angular/core";
import questions from "../questions.json";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent implements OnInit {
  public questionsList: {
    header: string;
    question: string;
    answer: string;
  }[] = questions;

  constructor() {}

  ngOnInit() {}
}
