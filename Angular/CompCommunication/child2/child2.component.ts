import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.css"]
})
export class Child2Component implements OnInit {
  // Step 1 : Declaring a variable with Output Decorator and EventEmitter Class
  @Output() sendData = new EventEmitter();
  messageFromChild = "I am from Child";
  constructor() {}

  ngOnInit() {}
  // Step 2 : Invoking a method when user clicks On Button
  sendMessageToParent() {
    // Step 3: Calling a variable which configured With Output and EventEmitter Class
    this.sendData.emit(this.messageFromChild);
  }
}
