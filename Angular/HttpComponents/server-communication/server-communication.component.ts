import { Component, OnInit } from "@angular/core";
import { ServerService } from "../server.service";

@Component({
  selector: "app-server-communication",
  templateUrl: "./server-communication.component.html",
  styleUrls: ["./server-communication.component.css"]
})
export class ServerCommunicationComponent implements OnInit {
  dataFromServer: Object;
  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getDataFromServer().subscribe(response => {
      this.dataFromServer = response;
    });
  }
}
