import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-exam-card",
  templateUrl: "./exam-card.component.html",
  styleUrls: ["./exam-card.component.scss"],
})
export class ExamCardComponent {
  @Input() header: string;
  @Input() srcImg: string;
  @Input() subject: string;

  constructor(private router: Router) {}

  // NBA Brak typu
  onSelect(subject) {
    // NBA Nazwa do enuma?
    this.router.navigate(["/egzamin", subject.id]);
  }
}
