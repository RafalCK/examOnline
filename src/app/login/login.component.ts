import { Component} from '@angular/core';
import { Router } from '@angular/router';

export enum Login {
  Name = "name",
  Surname = "surname"
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  // NBA Te pola sa zbedne - //RN Moim zdaniem sa potrzebne bo inaczej nie będzie danych w LocalStorage
  name: string;
  surname: string;

  inputName(event: any) {
    //NBA zamiast na sztywno stringa zawsze warto do enuma +
    this.name = event.srcElement.value;
    localStorage.setItem(Login.Name, `${this.name}`);
  }
  inputSurname(event: any) {
    this.surname = event.srcElement.value;
    localStorage.setItem(Login.Surname, `${this.surname}`);
  }

  logIn() {
    this.route.navigate(["/egzamin"]);
  }
  constructor(private route: Router) {}
}
