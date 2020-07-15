import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  name: string;
  surename: string;
  localname: string;
  localsurename: string;

  inputName(event: any) {
    this.name = event.srcElement.value;
    localStorage.setItem(`name`, `${this.name}`);
  }
  inputSurename(event: any) {
    this.surename = event.srcElement.value;
    localStorage.setItem(`surename`, `${this.surename}`);
  }

  zaloguj() {
    this.route.navigate(["/egzamin"]);
  }

  constructor(private route: Router) {}

  ngOnInit() {}
}
