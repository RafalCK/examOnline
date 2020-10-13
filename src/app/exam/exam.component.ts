import { Component} from '@angular/core';
import { Router } from '@angular/router';

import subjects from '../subjects.json';

@Component({
  selector: "app-exam",
  templateUrl: "./exam.component.html",
  styleUrls: ["./exam.component.scss"],
})

export class ExamComponent {


public subjectsList: {
  id: string;
  name: string;
  img: string;
}[] = subjects;
  // NBA na sztywno powinno isc z bazy ( w tym wypadku z jsona ) +
  constructor(private router: Router) {}
}
