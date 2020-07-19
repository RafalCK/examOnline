import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-question-multi",
  templateUrl: "./question-multi.component.html",
  styleUrls: ["./question-multi.component.scss"],
})
export class QuestionMultiComponent implements OnInit {
  selectedValues: string[] = [];
  @Input() question: string;
  @Input() value1: string;
  @Input() value2: string;
  @Input() value3: string;
  @Input() value4: string;
  @Input() label1: string;
  @Input() label2: string;
  @Input() label3: string;
  @Input() label4: string;

  constructor() {}

  ngOnInit() {}
}
