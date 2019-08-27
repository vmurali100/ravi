import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-sibling2",
  templateUrl: "./sibling2.component.html",
  styleUrls: ["./sibling2.component.css"]
})
export class Sibling2Component implements OnInit {
  messageFromSibling1: unknown;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.exchangeData.subscribe(response => {
      this.messageFromSibling1 = response;
    });
  }
}
