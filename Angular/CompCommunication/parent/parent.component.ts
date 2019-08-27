import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  message = "Data Received From Parent";

  studentInfo = {
    fName: "Leela",
    lName: "Krishna"
  };

  carDetails = [
    {
      companyName: "Maruti",
      carname: "Ertiga",
      engine: "200cc",
      seetar: 6,
      price: 600000
    },
    {
      companyName: "Maruti",
      carname: "Ertiga",
      engine: "200cc",
      seetar: 6,
      price: 600000
    },
    {
      companyName: "Maruti",
      carname: "Ertiga",
      engine: "200cc",
      seetar: 6,
      price: 600000
    },
    {
      companyName: "Maruti",
      carname: "Ertiga",
      engine: "200cc",
      seetar: 6,
      price: 600000
    }
  ];

  constructor() {}

  ngOnInit() {}
}
