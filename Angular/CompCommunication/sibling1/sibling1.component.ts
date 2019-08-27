import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-sibling1",
  templateUrl: "./sibling1.component.html",
  styleUrls: ["./sibling1.component.css"]
})
export class Sibling1Component implements OnInit {
  // LifeCyles of the Components
  message = "Message from Sibling 1";
  constructor(private cms: CommonService) {
    console.log("Constructor Running");
  }

  ngOnInit() {}

  sendDataToSibling() {
    this.cms.getDataAndSendData(this.message);
  }
}
