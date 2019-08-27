import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  // Step 1 : Creating A Variable with Subjetc to Communicate on Both sides
  exchangeData = new Subject();

  constructor() {}
  // Step 2: Create a function to Call the Subject to Communicate both Sides
  getDataAndSendData(message) {
    console.log(message);
    this.exchangeData.next(message);
  }
}
