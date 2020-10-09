import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  // NBA Te pola sa zbedne
  name: string;
  surname: string;

  inputName(event: any) {
    this.name = event.srcElement.value;
    // NBA zamiast na sztywno stringa zawsze dac lepiej enuma :D
    localStorage.setItem(`name`, `${this.name}`);
  }
  inputSurname(event: any) {
    this.surname = event.srcElement.value;
    localStorage.setItem(`surname`, `${this.surname}`);
  }

  logIn() {
    this.route.navigate(["/egzamin"]);
  }
  constructor(private route: Router) {}
}
