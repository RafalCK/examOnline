import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  name: string;
  surename: string;

  inputName(event: any) {
    this.name = event.srcElement.value;
  }
  inputSurename(event: any) {
    this.surename = event.srcElement.value;
  }

  constructor() {}

  ngOnInit() {}
}
