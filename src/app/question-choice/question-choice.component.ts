import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-question-choice",
  templateUrl: "./question-choice.component.html",
  styleUrls: ["./question-choice.component.scss"],
})
export class QuestionChoiceComponent implements OnInit {
  selectedValue: string;

  constructor() {}

  ngOnInit() {}
}
