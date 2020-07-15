import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-questions-board",
  templateUrl: "./questions-board.component.html",
  styleUrls: ["./questions-board.component.scss"],
})
export class QuestionsBoardComponent implements OnInit {
  name = localStorage.getItem(`name`);
  surename = localStorage.getItem(`surename`);
  selectedValue: string;
  selectedCities: string[] = [];

  constructor() {}

  ngOnInit() {}
}
