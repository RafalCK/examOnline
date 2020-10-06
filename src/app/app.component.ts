import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // NBA Nie uzywane
  name = localStorage.getItem(`name`);
  surname = localStorage.getItem(`surname`);

  constructor(private route: Router) {}

  // NBA Zeby ngOnInit dzialalo musisz dac implements OnInit
  ngOnInit() {}
}
