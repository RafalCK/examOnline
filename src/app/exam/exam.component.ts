import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-exam",
  templateUrl: "./exam.component.html",
  styleUrls: ["./exam.component.scss"],
})
export class ExamComponent implements OnInit {
  subjects = [
    { id: 1, name: "Informatyka", img: "../../assets/img/it.jpg" },
    { id: 2, name: "Biologia", img: "../../assets/img/biology.jpg" },
    { id: 3, name: "Historia", img: "../../assets/img/history.jpg" },
  ];
  constructor(private router: Router) {}

  onSelect(subject) {
    this.router.navigate(["/egzamin", subject.id]);
  }

  ngOnInit() {}
}
