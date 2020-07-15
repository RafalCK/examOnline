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
  @Input() maxPoints: number;
  recivePoints = 0;

  goToExam() {
    this.route.navigate(["/pytania"]);
  }

  constructor(private route: Router) {}

  ngOnInit() {}
}
