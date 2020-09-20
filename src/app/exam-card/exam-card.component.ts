import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-exam-card",
  templateUrl: "./exam-card.component.html",
  styleUrls: ["./exam-card.component.scss"],
})
export class ExamCardComponent implements OnInit {
  @Input() header: string;
  @Input() srcImg: string;
  @Input() subject: string;

  constructor(private router: Router) {}

  onSelect(subject) {
    this.router.navigate(["/egzamin", subject.id]);
  }

  ngOnInit() {}
}
