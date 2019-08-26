import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leela",
  templateUrl: "./leela.component.html",
  styleUrls: ["./leela.component.css"]
})
export class LeelaComponent implements OnInit {
  message = "leela works from component file";
  myMessage = "Iam from Component";
  constructor() {}

  ngOnInit() {}
}
