import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
})
export class Child1Component implements OnInit {
  @Input() getUserInfo;
  getUserInfoDetails: any;
  constructor() {}

  ngOnInit() {
    this.getUserInfoDetails = Object.keys(this.getUserInfo);
  }
}
