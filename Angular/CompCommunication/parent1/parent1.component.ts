import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent1",
  templateUrl: "./parent1.component.html",
  styleUrls: ["./parent1.component.css"]
})
export class Parent1Component implements OnInit {
  userInfo = {
    name: "Leela",
    contact: 7760355535,
    city: "Bangalore",
    zip: 560066
  };
  constructor() {}

  ngOnInit() {}
}
