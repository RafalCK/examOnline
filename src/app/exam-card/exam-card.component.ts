import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';


export enum RouterName {
  Egzamin = "egzamin",
}

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
  // RN każdy typ jaki wskaże to mówi, że to nie ten, więc jaki tutaj ten typ ?
  onSelect(subject) {
    //NBA nazwa do enuma +
    this.router.navigate([RouterName.Egzamin, subject.id]);
  }
}
