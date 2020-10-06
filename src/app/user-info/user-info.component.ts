import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
})
export class UserInfoComponent implements OnInit {
  name = localStorage.getItem(`name`);
  surname = localStorage.getItem(`surname`);

  // NBA masz bardzo duzo useless kodu kontruktorow i ngOnInit

  constructor() {}

  ngOnInit() {}
}
