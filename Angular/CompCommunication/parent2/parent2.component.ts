import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent2",
  templateUrl: "./parent2.component.html",
  styleUrls: ["./parent2.component.css"]
})
export class Parent2Component implements OnInit {
  anyvariable: any;
  constructor() {}

  ngOnInit() {}

  // Step 5 : When a event raised from Child componenet , This event will triggerd and Receive value will be assigned to a vriable wich can be used in html
  receveDataFromChild(event) {
    this.anyvariable = event;
  }
}
