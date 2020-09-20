import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  name: string;
  surname: string;

  inputName(event: any) {
    this.name = event.srcElement.value;
    localStorage.setItem(`name`, `${this.name}`);
  }
  inputSurname(event: any) {
    this.surname = event.srcElement.value;
    localStorage.setItem(`surname`, `${this.surname}`);
  }

  zaloguj() {
    this.route.navigate(["/egzamin"]);
  }
  constructor(private route: Router) {}

  ngOnInit() {}
}
