import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() receivedDetails;
  @Input() studentObject;
  @Input() carDetails;
  studentObjectKeys;
  constructor() {}

  ngOnInit() {
    this.studentObjectKeys = Object.keys(this.studentObject);
  }
}
