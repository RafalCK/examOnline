import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-question-multi",
  templateUrl: "./question-multi.component.html",
  styleUrls: ["./question-multi.component.scss"],
})
export class QuestionMultiComponent implements OnInit {
  selectedCities: string[] = [];

  constructor() {}

  ngOnInit() {}
}
