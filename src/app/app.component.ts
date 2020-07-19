import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  name = localStorage.getItem(`name`);
  surname = localStorage.getItem(`surname`);

  constructor(private route: Router) {}

  ngOnInit() {}
}
