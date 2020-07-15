import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exam",
  templateUrl: "./exam.component.html",
  styleUrls: ["./exam.component.scss"],
})
export class ExamComponent implements OnInit {
  name = localStorage.getItem(`name`);
  surename = localStorage.getItem(`surename`);

  constructor() {}

  ngOnInit() {}
}
